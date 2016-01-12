#### Do you need to modify your code to use it with a profiler?

Some node distributions, like N|Solid from NodeSource and Arc from Strongloop
include built-in profiling support, so you don't need to change your code.
The open source V8-profiler package at npm **does** require you to change
your source, to add triggers for when to start/stop CPU profiling and
obtain heap snapshots, as well as code to write that data to a file.

#### Does using the profiling tools degrade performance?

There is a slight performance impact when using the CPU profile, as wakes up
at intervals to collect stack trace information.  Heap snapshots contain data
on **ALL** the objects in memory, and can be quite large.  Current suggestions
include assuming the heap snapshot data will be 3 times larger than your current
heap usage.  A garbage collection is run before heap snaphots, and your JavaScript
code is blocked while the heap snapshot is being created, which can take a few
seconds.
