introduction to profiling Node.js applications

The V8 JavaScript engine used in Node.js contains two super-useful instrumentation facilities - CPU profiling and heap snapshots.  CPU profiles show you where your program is spending it's time, on a per-function basis.  Heap snapshots show you where your program is spending it's memory, on a per-object basis.

Using these tools can shine some light into the otherwise black box that is the Node.js runtime.

Topics covered:

* Define what CPU profiles and heap snapshots are
* Share what insights are provided into your applications with profiling
* Show how to obtain profiles from the v8-profiler package at npm, and with the N|Solid product from NodeSource
