# International Telephone Input

This is a mirror repo for IE11-compatibility only, and starts from version [**v17.0.21**](https://github.com/jackocnr/intl-tel-input/tree/v17.0.21) of the original repository, we will republish it as a new  package named `@fuddy-duddy/intl-tel-input`.

If you want to check the documentation, please refer to the [original repository](https://github.com/jackocnr/intl-tel-input/tree/v17.0.21).

## Goal
Follow the newest version of [google/libphonenumber](https://github.com/google/libphonenumber).

## Caveats

<mark>This repo has some submodules.</mark>

Please make sure to clone this repo with `--recurse-submodules` option:

```bash
git clone --recurse-submodules https://github.com/fuddy-duddies/intl-tel-input.git
```

And submodules' versions are:
- google/closure-compiler v20210302
- google/closure-library v20201006
- google/closure-linter v2.3.19
- google/python-gflags 3.1.2
- google/libphonenumber v9.0.21

<mark>Please develop this repo under Windows WSL and with VSCode devcontainer.</mark>

The package `@fuddy-duddy/intl-tel-input@^1` is for IE 11 support, if you didn't need to support IE, please use the package which is published by the original repository.

## Contributing

Please use these versions:

```text
>node --version
v16.20.2

>npm --version
8.19.4

>yarn --version
1.22.22
```
