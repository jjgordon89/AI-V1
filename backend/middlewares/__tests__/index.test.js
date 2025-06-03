// backend/middlewares/__tests__/index.test.js
const { catchErr } = require('../index'); // Adjust path if middleware is exported differently

describe('catchErr Middleware', () => {
  let mockRequest;
  let mockResponse;
  let mockNext;

  beforeEach(() => {
    mockRequest = {};
    // mockResponse can be simple for these tests as catchErr mainly interacts with next
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    mockNext = jest.fn();
  });

  test('should call the wrapped function and not call next with an error if the function resolves', async () => {
    const successfulAsyncFn = jest.fn().mockResolvedValue('SuccessValue');

    // This simulates a route handler that completes without error
    // catchErr expects the controller (ctrl) to be a function that takes (req, res) and returns a promise.
    // The original catchErr is: exports.catchErr = ctrl => (req, res, next) => ctrl(req, res).catch(next)
    // So the 'handler' here is the 'ctrl'
    const handler = jest.fn().mockResolvedValue('SuccessValue');

    await catchErr(handler)(mockRequest, mockResponse, mockNext);

    expect(handler).toHaveBeenCalledWith(mockRequest, mockResponse); // ctrl(req, res)
    // If handler resolves, .catch(next) is not called, so next shouldn't be called with an error.
    // It might not be called at all if the handler itself sends a response.
    expect(mockNext).not.toHaveBeenCalledWith(expect.any(Error));
  });

  test('should call next with the error if the wrapped function rejects', async () => {
    const testError = new Error('Test error');
    // This 'handler' is the 'ctrl' in catchErr = ctrl => (req, res, next) => ctrl(req, res).catch(next)
    const failingHandler = jest.fn().mockRejectedValue(testError);

    await catchErr(failingHandler)(mockRequest, mockResponse, mockNext);

    expect(failingHandler).toHaveBeenCalledWith(mockRequest, mockResponse); // ctrl(req, res)
    expect(mockNext).toHaveBeenCalledWith(testError); // .catch(next) should be called with the error
  });

  // Test to ensure req, res, next are passed correctly if catchErr was structured differently,
  // but given: exports.catchErr = ctrl => (req, res, next) => ctrl(req, res).catch(next)
  // The 'ctrl' function is only expected to receive (req, res).
  // The 'next' function is part of the outer Express middleware signature.
  // This test case from the prompt might need adjustment based on the actual catchErr signature.
  // The current catchErr is: (ctrl) => (req, res, next) => { ctrl(req,res).catch(next) }
  // So, 'ctrl' itself is not directly passed 'next' by 'catchErr'.
  // Let's re-evaluate this third test.
  // The current implementation of `catchErr` does not pass `next` to the controller `ctrl`.
  // The controller `ctrl` is expected to be an async function `(req, res)` which returns a promise.
  // If `ctrl(req, res)` rejects, the `.catch(next)` part of `catchErr` handles it.
  // So a test for "passing next to the wrapped function" is not applicable to this specific `catchErr`.
  // I will omit the third test case as it doesn't align with the provided catchErr implementation.
});
