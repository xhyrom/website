---
title: Configuration
description: Configuration of Peddler's Pocket minecraft plugin
---

## Configuration

In order to customize the behavior of Peddler's Pocket, you can modify the plugin's configuration file. Below is an example of the configuration file structure:

<details>
<summary>Default config file</summary>

```yaml
actions:
  success:
    - { command: "eco <player> give <price>" }
    - { title: "<green>+<price>$" }
    - { message: "<green>You have sold things for <price>$" }
    - { sound: "entity.experience_bottle.throw", volume: 1, pitch: 1 }
  fail:
    - { message: "<red>No item sold" }

ui:
  title: "<red>Peddlers Pocket"

# Minecraft Material Prices
# Categories are used to group materials together - only for better overview
materials:
  drops:
    ROTTEN_FLESH: 2.5
    SPIDER_EYE: 2.5
    STRING: 1.5
    GUNPOWDER: 5
    BONE: 2
    ARROW: 2
    LEATHER: 5
    RABBIT_HIDE: 1
    FEATHER: 1
    INK_SAC: 2.5
    PHANTOM_MEMBRANE: 2.5
    SLIMEBALL: 5
    SLIME_BLOCK: 25
    HONEY_BOTTLE: 1.5
    HONEY_BLOCK: 5
    ENDER_PEARL: 8
    GHAST_TEAR: 40
    BLAZE_ROD: 15
    BLAZE_POWDER: 4
    MAGMA_CREAM: 15
    NAUTILUS_SHELL: 25
    WITHER_SKELETON_SKULL: 0
    NETHER_STAR: 1500
    WITHER_ROSE: 0
  earth:
    DIRT: 0.25
    GRASS_BLOCK: 1
    COARSE_DIRT: 1
    GRAVEL: 1
    PODZOL: 1.5
    MYCELIUM: 5
  food:
    BREAD: 3
    BEEF: 3.5
    COOKED_BEEF: 4
    PORKCHOP: 3.5
    COOKED_PORKCHOP: 4
    MUTTON: 2.5
    COOKED_MUTTON: 3
    CHICKEN: 2.5
    COOKED_CHICKEN: 3
    RABBIT: 1.5
    COOKED_RABBIT: 2
    COD: 1.5
    COOKED_COD: 2
    SALMON: 2
    COOKED_SALMON: 2.5
    PUFFERFISH: 1.5
    TROPICAL_FISH: 1.5
    APPLE: 5
    GOLDEN_APPLE: 125
    ENCHANTED_GOLDEN_APPLE: 500
    CARROT: 1
    GOLDEN_CARROT: 20
    POTATO: 1
    BAKED_POTATO: 1.5
    MELON: 8
    MELON_SLICE: 3
    GLISTERING_MELON_SLICE: 20
    PUMPKIN: 4
    PUMPKIN_PIE: 0
    BEETROOT: 0.5
    EGG: 1
    MILK: 30
    CAKE: 0
    FERMENTED_SPIDER_EYE: 0
    CHORUS_FRUIT: 2.5
    POPPED_CHORUS_FRUIT: 3
    BUCKET_OF_COD: 31.5
    BUCKET_OF_SALMON: 32
    BUCKET_OF_PUFFERFISH: 31.5
    BUCKET_OF_TROPICAL_FISH: 31.5
    SUGAR_CANE: 4
    BAMBOO: 0.5
  ores:
    REDSTONE_ORE: 15
    REDSTONE: 1.5
    REDSTONE_BLOCK: 13.5
    COAL: 4
    COAL_BLOCK: 36
    LAPIS_ORE: 50
    LAPIS_LAZULI: 2.5
    LAPIS_BLOCK: 22.5
    RAW_IRON: 9
    RAW_IRON_BLOCK: 81
    IRON_NUGGET: 1
    IRON_INGOT: 10
    IRON_BLOCK: 90
    RAW_GOLD: 24
    RAW_GOLD_BLOCK: 216
    GOLD_NUGGET: 2.5
    GOLD_INGOT: 25
    GOLD_BLOCK: 225
    EMERALD_ORE: 150
    EMERALD: 50
    EMERALD_BLOCK: 450
    DIAMOND_ORE: 437.5
    DIAMOND: 125
    DIAMOND_BLOCK: 1125
    NETHERITE_INGOT: 2000
    ANCIENT_DEBRIS: 500
    NETHERITE_BLOCK: 18000
    RAW_COPPER: 5
    RAW_COPPER_BLOCK: 45
    COPPER_INGOT: 7.5
    COPPER_BLOCK: 67.5
    BASALT: 3
    DEESLATE: 3
    COBBLED_DEEPSLATE: 4.25
  sand:
    SAND: 0.1
    SANDSTONE: 0.1
    SANDSTONE_SLAB: 0.1
    SANDSTONE_STAIRS: 0.1
    SANDSTONE_WALL: 0.1
    CUT_SANDSTONE: 0.2
    CUT_SANDSTONE_SLAB: 0.1
    CHISELED_SANDSTONE: 0.2
    SMOOTH_SANDSTONE: 0.2
    SMOOTH_SANDSTONE_SLAB: 0.2
    SMOOTH_SANDSTONE_STAIRS: 0.2
    RED_SAND: 0.5
    RED_SANDSTONE: 0.2
    RED_SANDSTONE_SLAB: 0.1
    RED_SANDSTONE_STAIRS: 0.2
    RED_SANDSTONE_WALL: 0.2
    CUT_RED_SANDSTONE: 0.1
    CUT_RED_SANDSTONE_SLAB: 0.1
    CHISELED_RED_SANDSTONE: 0.1
    SMOOTH_RED_SANDSTONE: 0.1
    SMOOTH_RED_SANDSTONE_SLAB: 0.1
    SMOOTH_RED_SANDSTONE_STAIRS: 0.1
  stone:
    COBBLESTONE: 0.25
    COBBLESTONE_SLAB: 0.15
    COBBLESTONE_STAIRS: 0.15
    COBBLESTONE_WALL: 0.15
    STONE: 1
    STONE_SLAB: 0.5
    STONE_STAIRS: 1.5
    SMOOTH_STONE: 1.5
    SMOOTH_STONE_SLAB: 1
    ANDESITE: 0.5
    ANDESITE_SLAB: 0.5
    ANDESITE_STAIRS: 1
    ANDESITE_WALL: 0.5
    POLISHED_ANDESITE: 0.5
    POLISHED_ANDESITE_SLAB: 0.5
    POLISHED_ANDESITE_STAIRS: 1
    DIORITE: 0.5
    DIORITE_SLAB: 0.5
    DIORITE_STAIRS: 1
    DIORITE_WALL: 0.5
    POLISHED_DIORITE: 0.5
    POLISHED_DIORITE_SLAB: 0.5
    POLISHED_DIORITE_STAIRS: 1
    GRANITE: 0.5
    GRANITE_SLAB: 0.5
    GRANITE_STAIRS: 1
    GRANITE_WALL: 0.5
    POLISHED_GRANITE: 0.5
    POLISHED_GRANITE_SLAB: 0.5
    POLISHED_GRANITE_STAIRS: 1
    CLAY: 6
    CLAY_BALL: 1.5
    BRICK: 2
    BRICKS: 8
    BRICK_SLAB: 4
    BRICK_STAIRS: 12
    BRICK_WALL: 8
    OBSIDIAN: 8
    CRYING_OBSIDIAN: 8
    GLOWSTONE: 4
  utility:
    LANTERN: 9
    SOUL_LANTERN: 0
    TORCH: 1
    SOUL_TORCH: 0
    FLINT: 1
    CHEST: 8
    LEAD: 9
    NAME_TAG: 25
    PAPER: 0
    SADDLE: 100
    SCAFFOLDING: 0
    TNT: 27
    BUCKET: 30
    LAVA_BUCKET: 31
    TOTEM_OF_UNDYING: 250
    CRAFTING_TABLE: 4
    LECTERN: 0
    GRINDSTONE: 4
    BLAST_FURNACE: 58
    SMOKER: 18
    FLETCHING_TABLE: 6
    CARTOGRAPHY_TABLE: 0
    BREWING_STAND: 26.5
    SMITHING_TABLE: 24
    CAULDRON: 70
    BARREL: 7
    LOOM: 4
    STONECUTTER: 13
    COMPOSTER: 4
  wood:
    OAK_LOG: 4
    STRIPPED_OAK_LOG: 4
    OAK_WOOD: 5.5
    STRIPPED_OAK_WOOD: 5.5
    OAK_PLANKS: 1
    OAK_STAIRS: 1.5
    OAK_SLAB: 0.5
    SPRUCE_LOG: 4
    STRIPPED_SPRUCE_LOG: 4
    SPRUCE_WOOD: 5.5
    STRIPPED_SPRUCE_WOOD: 5.5
    SPRUCE_PLANKS: 1
    SPRUCE_STAIRS: 1.5
    SPRUCE_SLAB: 0.5
    BIRCH_LOG: 4
    STRIPPED_BIRCH_LOG: 4
    BIRCH_WOOD: 5.5
    STRIPPED_BIRCH_WOOD: 5.5
    BIRCH_PLANKS: 1
    BIRCH_STAIRS: 1.5
    BIRCH_SLAB: 0.5
    JUNGLE_LOG: 4
    STRIPPED_JUNGLE_LOG: 4
    JUNGLE_WOOD: 5.5
    STRIPPED_JUNGLE_WOOD: 5.5
    JUNGLE_PLANKS: 1
    JUNGLE_STAIRS: 1.5
    JUNGLE_SLAB: 0.5
    ACACIA_LOG: 4
    STRIPPED_ACACIA_LOG: 4
    ACACIA_WOOD: 5.5
    STRIPPED_ACACIA_WOOD: 5.5
    ACACIA_PLANKS: 1
    ACACIA_STAIRS: 1.5
    ACACIA_SLAB: 0.5
    DARK_OAK_LOG: 4
    STRIPPED_DARK_OAK_LOG: 4
    DARK_OAK_WOOD: 5.5
    STRIPPED_DARK_OAK_WOOD: 5.5
    DARK_OAK_PLANKS: 1
    DARK_OAK_STAIRS: 1.5
    DARK_OAK_SLAB: 0.5
    CRIMSON_STEM: 5
    STRIPPED_CRIMSON_STEM: 5
    CRIMSON_HYPHAE: 6.5
    STRIPPED_CRIMSON_HYPHAE: 6.5
    CRIMSON_PLANKS: 1.5
    CRIMSON_STAIRS: 2.5
    CRIMSON_SLAB: 1
    WARPED_STEM: 5
    STRIPPED_WARPED_STEM: 5
    WARPED_HYPHAE: 6.5
    STRIPPED_WARPED_HYPHAE: 6.5
    WARPED_PLANKS: 1.5
    WARPED_STAIRS: 2.5
    WARPED_SLAB: 1
```

</details>

### Actions

The `actions` section allows you to define what happens when a sell action is successful or fails. For a successful sell, you can specify a list of actions to perform. In the provided example, the actions include giving the player the specified price, displaying a title, sending a success message, and playing a sound effect.

In case of a failed sell, you can define actions to handle it. The example shows a simple message being displayed when no item is sold.

| Action  | Properties                                                      | Description                     |
| ------- | --------------------------------------------------------------- | ------------------------------- |
| command | `command` - string                                              | Executes the specified command. |
| title   | `title` - string                                                | Displays a title to the player. |
| message | `message` - string                                              | Sends a message to the player.  |
| sound   | `sound` - sound identifier, `volume` - number, `pitch` - number | Plays a sound to the player.    |

### User Interface (UI)

The `ui` section allows you to customize the user interface of the sell GUI. The `title` field specifies the title that will be displayed at the top of the GUI. In the provided example, the title is set to "Peddlers Pocket".

### Materials

The `materials` section provides a way to define the prices for different categories of items. Categories can be created and named as desired, for better organization. Within each category, you can specify the item names and their corresponding prices. In the given example, the "drops" category includes various materials with their respective costs.

Feel free to modify the configuration file according to your server's economy and requirements. Experiment with different actions, UI titles, and material categories to create the perfect selling experience for your players.