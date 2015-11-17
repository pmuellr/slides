introduction to profiling Node.js applications

The V8 JavaScript engine used in Node.js contains two super-useful instrumentation facilities - CPU profiling, and heap snapshots.  CPU profiling lets you see where you program is spending it's time, on a per-function basis.  Heap snapshots show you where memory is allocated in your application.

Neither of these facilities is well-known within the Node.js community, perhaps primarily because the tooling is not available externally from within vanilla Node.js distributions.  There are however, several ways you can get access to these capabilities, from both open source npm modules, as well as alternative Node.js distributions.

In this talk, I'll talk about what CPU profiling and heap snapshots are, what sorts of insights they provide into your application, and how to make use of them as part of your standard Node.js workflow.
