---
title: Defining WebAssembly
description: Realizations from initial delves into what WebAssembly is
date: 2021-08-29
---

## Defining WebAssembly

When I knew I wanted to delve into WebAssembly (wasm) for my thesis I felt like I had to get some major definition work under my belt. I can't help but think that this feeling was motivated by how convoluted some definitions of wasm on the internet are. It was so ba that even after reading numerous articles and watching countless conference talks I couldn't really nail down what this technology even is.

I hope to address this by describing three aspects of wasm that define the technology and represent what it is literally, practically and socially. WebAssembly is a byte-code, a runtime, and a community.

### Byte-Code

WebAssembly is literally a byte-code. Hence the name WebASSEMBLY. With performance as one of the technology's major values the decision to define wasm as an ISA is an obvious choice. This allows for faster parse and execution times than other text based, interpreted languages (JavaScript).

Due to the abstract nature of wasm, a lot of leeway is given to the implementors of said ISA. This means that compilation and interpretation can come in many different flavors in many different settings. We see these differences arise in the second attribute of WebAssembly, the runtime.

### Runtime

WebAssembly may be a byte-code, but it is a byte-code intended to be run in a virtual machine (VM). This is the layer of WebAssembly most developers and engineers will find themselves most familiar with in practice. To generate the byte-code a developer would simply specify a compiler flag, but to actually execute the generated code the developer would rely on the wasm runtime. Each of the four major browser vendors have implemented a wasm runtime (Chrome, Firefox, Edge, Safari), but there are various efforts to implement vm's outside the browser. This allows engineers to take advantage of wasm outside of the browser in settings like the cloud and IoT. There are a few nuances and differences between each runtime, so much so that going into a deep dive of the runtimes would require a more dedicated piece. 

The biggest importance of the runtime is that this is where your wasm code come alive. You may experience minor performance differences, but all runtimes guarantee the promises of wasm (speed, security, portable). Another important aspect of the runtimes is that there are more in the works. These projects serve as a reminder of the dedicated community of wasm contributors.

### Community

WebAssembly was built for the web. The web is a platform, but also the web is a community. The social implications of this decision is clear as WebAssembly is being built with a defined MVP and constant iteration. This combined with the open source nature and emphasis of the technology creates a community surrounding wasm that is active and engaged. High skilled from around the world are contributing to the goals outlined by wasm and believe in its future.

Not only are individual engineers collaborating, but we also see clear and dedicated collaboration between corporations. Companies like Google and Mozilla are actively working together and investing together, because they see the value of wasm and the power of its promises. 

### Conclusion

Splitting WebAsssembly into these three attributes doesn't perfectly capture what it is, but in my personal experience, it has certainly helped me get a clearer picture of what people mean when they talk of wasm.

Each of these three attributes are equally important and imperative to the future of WebAssembly, even if some of the descriptions are _more correct_ than others, each make up WebAssembly and each rely on one another.
