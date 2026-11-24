# Platinum Trainer Editor

**A browser-based Pokémon Platinum (USA) trainer editor.**

Platinum Trainer Editor is a tool designed to edit trainer data and battle conditions in Pokémon Platinum (USA). It runs directly in your browser, allowing you to load a ROM, modify trainer teams and conditions, and export a modified ROM without uploading your game to an external server.

**[Open Platinum Trainer Editor](https://kkvzn.github.io/Plat-Trainer-Editor/)**

---

## Features

- **Trainer Editor** – Browse and edit trainers from Pokémon Platinum.
- **Trainer Teams** – Modify Pokémon assigned to each trainer.
- **Pokémon Conditions** – Configure battle conditions such as starting HP and status conditions.
- **Battle Settings** – Manage single and double battle configurations.
- **Search and Filtering** – Find trainers by name, class, Pokémon, held items, and moves.
- **JSON Import and Export** – Export and import trainer data for easier editing and backup.
- **DSPRE Compatibility** – Export modified trainer data files for use with DSPRE.
- **ROM Export** – Generate a modified Pokémon Platinum ROM directly in your browser.
- **Local Processing** – Your ROM is processed locally and is never uploaded to a server.

## Requirements

- Pokémon Platinum (USA) ROM.
- A modern browser (Google Chrome or Microsoft Edge recommended).
- The **Expand ARM9** patch from DSPRE's Patch Toolbox, or allow the editor to apply the required patch during export.

The synthetic overlay functionality requires the ARM9 expansion. If the required patch is missing, the editor can offer to apply it to the exported ROM.

## How to Use

1. Open the [online editor](https://kkvzn.github.io/Plat-Trainer-Editor/).
2. Select your Pokémon Platinum (USA) ROM.
3. Browse the trainer list and select a trainer.
4. Edit the trainer's Pokémon and battle conditions.
5. Export the modified ROM or the trainer data files for DSPRE.
6. Test your modified ROM in an emulator.

## Desktop Version

A desktop version built with Electron is also available.

### Requirements

- [Node.js (LTS)](https://nodejs.org/)

### Running the application

Clone or download this repository, then open a terminal in the project directory and run:

```bash
npm install
npm start
```

### Building the Windows executable

```bash
npm run build
```

The portable executable will be generated in the `dist` directory.

For macOS and Linux, run the appropriate Electron Builder command on the target operating system.

## Project Status

The trainer editing and ROM export workflow is functional and has been tested with melonDS.

The project is still under development. Additional trainer editing features and improvements may be introduced in future releases.

## Future Plans

The following features are planned for future updates:

- **Trainer AI Flags** – Add the ability to view and configure individual trainer AI flags to customize battle behavior.
- **Expanded Trainer Settings** – Introduce additional options for configuring trainer battle parameters.
- **Improved Trainer Management** – Enhance trainer browsing, searching, filtering, and editing workflows.
- **Validation Tools** – Add checks to detect invalid or inconsistent trainer data before exporting.
- **Additional Export Options** – Improve compatibility and flexibility when exporting modified trainer data.

These plans may evolve as development progresses.

## Credits

- **DSPRE** – Tools and patching infrastructure for Pokémon ROM editing.
- **melonDS** – Nintendo DS emulator used for testing.

## Disclaimer

This project is intended for personal ROM editing, modding, and educational purposes.

You must provide your own legally obtained Pokémon Platinum (USA) ROM. The project does not distribute copyrighted game files.

Pokémon and all related trademarks are the property of Nintendo, The Pokémon Company, and their respective owners.
