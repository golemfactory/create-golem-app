# Create Golem App

> Create a new Golem Application.

## Installing / Getting started

Install using npm:

```shell
npm install -g @golem-sdk/create-golem-app
```

Install using yarn:

```shell
yarn global add @golem-sdk/create-golem-app
```

Test if it is installed correctly:

```shell
create-golem-app --version
```

If everything is fine, you should see the version of the `create-golem-app` installed.

## Creating a new app

`create-golem-app` uses [golem-sdk CLI](https://github.com/golemfactory/golem-sdk-cli/) to create a new application from a template.

Once installed, you can run the following command directly:

```shell
create-golem-app
```

You can also use `npx` to run the command without installing it:

```shell
npx @golem-sdk/create-golem-app
```

And the third option is to use `npm init`:

```shell
npm init @golem-sdk/golem-app
```

Once you run this CLI script, you will be asked a series of questions about your application and the CLI will use your answers to generate a new Golem Application.

The first question will be the project name. The CLI will use it to create a new directory for your application in the current directory. You can use the `--path` option to override this behaviour.

Note: The command will abort if the directory already exists.

You can provide all the needed information from command line too. Type `golem-sdk new --help` to see the list of available options.

## Application templates

Currently only one template is available, `js-node`. It is a template for a Golem application, written in plain javascript (CommonJS) that performs
a single task on Golem Network.

More templates will soon be added.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

If you would like to add or improve our application templates, please go to [golem-sdk CLI GitHub page](https://github.com/golemfactory/golem-sdk-cli/).

## Links

- Project homepage: https://github.com/golemfactory/create-golem-app
- Repository: https://github.com/golemfactory/create-golem-app
- Issue tracker: https://github.com/golemfactory/create-golem-app/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    us directly through our [contact form](https://www.golem.network/contact-form) instead of using the issue tracker.
    We value your effort to improve the security and privacy of this project!
- [Golem](https://golem.network), a global, open-source, decentralized supercomputer that anyone can access.
- [Golem Image Registry](https://registry.golem.network)
- [Golem Discord](https://chat.golem.network)
- Documentation:
  - [QuickStart](https://docs.golem.network/docs/creators/javascript/quickstarts) for JavaScript developers
  - Have a look at the most important concepts behind any Golem
    application: [Golem application fundamentals](https://handbook.golem.network/requestor-tutorials/golem-application-fundamentals)
  - Learn about preparing your custom Docker-like [images](https://docs.golem.network/docs/creators/javascript/tutorials/building-custom-image).
- Related projects:
  - [Golem SDK](https://github.com/golemfactory/golem-js) - Typescript + NodeJS API for Golem.
  - [Golem SDK CLI](https://github.com/golemfactory/golem-sdk-cli) - CLI tool for Golem SDK.
  - [Yagna](https://github.com/golemfactory/yagna) - An open platform and marketplace for distributed computations.
  - [yapapi](https://github.com/golemfactory/yapapi) - Python high-level API for Golem.

## Licensing

The code in this project is licensed under the GPL-3 license.

See [LICENSE](LICENSE) for more information.
