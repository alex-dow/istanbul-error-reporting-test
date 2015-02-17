# istanbul-error-reporting-test

To run: grunt clear test

This project is purposefully broken to demonstrate that the error messages are not that helpful in figuring out the problem. It may be obvious in a small project like this, but with large projects where grunt files could be quite big it may not always be obvious that the problem is configuration related.

Ultimately what's reported is that PhantomJS timed out and that it's probably due to an async spec failing. But in this case, that's simply not what the problem is. The problem is that Istanbul can't find any files to cover.
