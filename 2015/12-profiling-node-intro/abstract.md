introduction to profiling Node.js applications

The V8 JavaScript engine used in Node.js contains two super-useful instrumentation facilities - CPU profiling and heap snapshots.  CPU profiles show you where your program is spending it's time, on a per-function basis.  Heap snapshots show you where your program is spending it's memory, on a per-object basis.

Neither of these facilities is well-known within the Node.js community, perhaps because the tooling is not available from the standard Node.js distribution.  There are however, several ways you can get access to these capabilities - open source npm modules and alternative Node.js distributions.

In this talk, I'll explain what CPU profiling and heap snapshots are, what sorts of insights they provide into your application, and how to make use of them as part of your Node.js development workflow.
