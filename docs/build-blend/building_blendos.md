---
sidebar_position: 2
---

# Building an image

## Downloading the sources

blendOS uses a "manifest" with Assemble, that essentially declares all of the packages to be downloaded by Assemble to be built locally so as to build an ISO/image. This term should be familiar if you've delved into Android ROM development in the past.

Since blendOS is a rolling-release distribution, there's a single branch for the manifest, `main`, that you can use during initialization.

### Create the directories

You will need to create a directory where Assemble will pull blendOS's sources and build them.

```bash
mkdir -p ~/blendOS/build
```

This directory should not be pushed anywhere, as it's simply used for storing blendOS's code.

### Initialize an Assemble repository

You may now initialize an Assemble repo to download blendOS's sources.

```bash
cd ~/blendOS/build
assemble init 'https://github.com/blend-os/manifests' 'main'
```

### Sync/download the sources locally

To start the download of the sources, type the following:

```bash
assemble sync
```

By default, assemble uses all of the available cores on the system being used to build blendOS. However, you may change that behaviour by passing the `-j` argument. For example, use `-j 4` to use only 4 of the available cores.

:::info

It is recommended that you run `assemble sync` every few days, so as to pull in any new changes to the sources. However, keep in mind that this will overwrite any local changes you make.

:::

Keep in mind that you're not expected to make changes the downloaded source tree directly, as they will be overwritten during builds and when syncing the sources with `assemble sync`.

### Prepare the system packages

After the source downloads, ensure you’re in the root of the source code (`cd ~/blendOS/build`), then type:

```bash
source build/envsetup.sh
breakfast
```

This may take a few minutes, so feel free to grab a cup of coffee while the packages build.

:::warning

Keep in mind that `breakfast` will overwrite any local changes you make, similar to `assemble sync`.

:::

### Build an ISO

Time to start the ISO build! Type the following:

```bash
sudo brunch
```

The build should now begin.

### Install the build

You're now the master of your own operating system!

`brunch` will mention the directory where the ISO file may be found. You can use a tool like VirtualBox or GNOME Boxes for testing the built ISO, or flash it to a USB drive and install it.