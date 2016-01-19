Getting Started with N|Solid Profiling
================================================================================

I recently presented "Profiling Node.js Applications" for a webinar. The video of the webinar is available at [Vimeo][pnav] and the slides are available at my [slides site][pnas].

The presentation covered using the CPU Profiling and Heap Snapshot tools to profile the execution performance and memory usage of your applications.  These tools are available at the push of a button from the N|Solid Console.

The profiling tools can help diagnose the following problems with your application:

* find a memory leak
* find slow functions causing bottlenecks

The profilers are so easy to use, you won't want to wait for a problem to appear before using them.  Try running them on your application to see if you there's any easy optimizations you can make to your memory usage and performance.  You may be surprised; I often am!

If you haven't already installed N|Solid yet you might want to check out these blog posts, which provide an introduction to the N|Solid Runtime and Console.

* "[Getting Started with the N|Solid Console][gsnsc]"
* "[Getting Started with N|Solid at the Command Line][gsnscli]"

If you'd like more information on the V8 CPU Profiler and Heap Snapshot tools that underlie the N|Solid profiling tools, see the following documents at the Google Developers site:

* "[How to Record Heap Snapshots][goog-cpu]"
* "[Speed Up JavaScript Execution][goog-cpu]"

[pnas]: http://pmuellr.github.io/slides/2016/01-intro-to-profiling/intro-to-profiling.pdf
[pnav]: http://example.com
[gsnsc]: https://nodesource.com/blog/getting-started-with-the-nsolid-console/
[gsnscli]: https://nodesource.com/blog/getting-started-with-nsolid-at-the-command-line/
[goog-heap]: https://developers.google.com/web/tools/chrome-devtools/profile/memory-problems/heap-snapshots
[goog-cpu]: https://developers.google.com/web/tools/chrome-devtools/profile/rendering-tools/js-execution
