---
sidebar_position: 1
---

# Setting up blendOS builds

This article details how you can set up a suitable build environment for building all of blendOS's packages and ISOs, required to proceed to the next few articles under this group.

:::info

These instructions are heavily inspired by the LineageOS build docs.

:::

### blendOS & Arch Linux

#### Pre-requisities for building on blendOS

Since blendOS is immutable, it's not possible to build an ISO on the host directly. Instead, you must create an Arch Linux container from blendOS Settings.

Any subsequent commands are expected to be run in the created container.

#### Installing required packages

If you're using Arch Linux, make sure your system is up-to-date.

```bash
sudo pacman -S git archiso base-devel xorriso python python-click python-psutil squashfs-tools
```

#### Installing `assemble`

blendOS uses its own system, Assemble, for managing code and builds. It's quite similar to `repo` in the realm of Android development.

```bash
TEMP_ASSEMBLE_DIR="$(mktemp -d)"
git clone https://github.com/blend-os/assemble "${TEMP_ASSEMBLE_DIR}/assemble"
sudo cp "${TEMP_ASSEMBLE_DIR}/assemble/assemble" /usr/local/bin
rm -rf "${TEMP_ASSEMBLE_DIR}"
```

**You may now proceed to building blendOS.**
