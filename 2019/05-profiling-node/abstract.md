introduction to profiling Node.js applications
================================================================================

The V8 JavaScript engine used in Node.js contains two super-useful instrumentation facilities - CPU profiling and heap snapshots.  CPU profiles show you where your program is spending it's time, on a per-function basis.  Heap snapshots show you where your program is spending it's memory, on a per-class basis.

Using these tools can shine some light into the otherwise black box that is the Node.js runtime, when investigating slow code or high memory use.

Topics covered:

* define what CPU profiles and heap snapshots are
* demonstrate how to generate CPU profiles and heap snapshots 
* share what insights are provided into your applications with profiling

Patrick Mueller is a Principal Software Engineer at Elastic working on Kibana.  He previously worked at NodeSource on diagnostic tools for Node.  Prior to that, he worked at IBM on IDEs, and Smalltalk, Java and JavaScript runtimes and libraries, for both mobile devices, desktops and servers.

twitter: @pmuellr 