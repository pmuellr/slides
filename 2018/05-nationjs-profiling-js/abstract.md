Saving Money and Delighting Customers by Making It Go Faster
================================================================================

You're writing lots of JavaScript code.  Do you know which parts of your code are slow?  Precisely?  Probably not, unless you have heavily instrumented your code, or used a profiling tool.  That slow code is costing you money, and customers, and you may have no idea where it is!

Modern JavaScript runtimes include profiling tools which can tell you how long your functions are running.  These profilers typically require no instrumentation, and are available right in your runtime debugger.

In this presentation, you'll learn how you can easily profile your apps, and read the resulting profile data to find the slow parts of your code.  With these tools you'll save money by trimming CPU costs, delight customers with more responsive applications, and most importantly delight your boss by saving money and delighting customers.



## old

Your application's performance is key to keeping customers happy and reining in hardware costs.  Customers frustrated with slow applications just stop using them.  Poorly performing applications require more machines to run them, compared to optimized applications.

In order to fix poor performance problems, you first have to identify them.  For many programming environments, this involves using specialized tools and environments and sometimes experts, to analyze the application.  For JavaScript, we are fortunate to have CPU profiling tools baked right into the JavaScript runtimes, allowing every developer to do performance analysis.

In this talk we'll go over profiling tools available for Node.js and the browser.  We'll show a brief demo of how these tools can be used to find the slow code in an application, at both development time and in production.
