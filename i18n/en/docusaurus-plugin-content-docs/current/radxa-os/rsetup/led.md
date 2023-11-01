# LED Setup

Some products will have user-controllable LEDs on-board. They can be managed via [`rsetup`](/radxa-os/rsetup#gpio-leds):

```
┌──────────────────────────────────┤ RSETUP ├──────────────────────────────────┐
| Below are the available LEDs and their triggers.                             |
| Select any to update their trigger.                                          |
|                                                                              |
|    [ ] user-led1 [default-on]                                                |
|    [ ] user-led2 [heartbeat]                                                 |
|                                                                              |
|                     <Ok>                         <Cancel>                    |
|                                                                              |
└──────────────────────────────────────────────────────────────────────────────┘
```

The content inside '[ ]' at the end is the current LED trigger, which can be roughly understood as the LED status.

On Radxa products, the power LED usually has `default-on` trigger, while the status LED usually has `heartbeat` trigger.

## Change LED light status

The following steps help us to change light status:

1. Use the `up` or `down` key to move the highlighted selection to which LED you want to edit the statu;
2. Use the `Space` bar to confirm your choose, a `*` would appeare on the `[ ]` at the start.

```
┌──────────────────────────────────┤ RSETUP ├──────────────────────────────────┐
| Below are the available LEDs and their triggers.                             |
| Select any to update their trigger.                                          |
|                                                                              |
|    [*] user-led1 [default-on]                                                |
|    [ ] user-led2 [heartbeat]                                                 |
|                                                                              |
|                     <Ok>                         <Cancel>                    |
|                                                                              |
└──────────────────────────────────────────────────────────────────────────────┘
```

3. Press `Enter` to go to the trigger selection menu:

```
┌──────────────────────────────────┤ RSETUP ├──────────────────────────────────┐
│ Please select the new trigger:                                               │
│                                                                              │
│    ( ) none                                                                  │
│    ( ) rfkill-any                                                            │
│    ( ) rfkill-none                                                       ▒   │
│    ( ) kbd-scrolllock                                                    ▒   │
│    ( ) kbd-numlock                                                       ▒   │
│    ( ) kbd-capslock                                                      ▒   │
│    ( ) kbd-kanalock                                                      ▒   │
│    ( ) kbd-shiftlock                                                     ▒   │
│    ( ) kbd-altgrlock                                                     ▒   │
│    ( ) kbd-ctrllock                                                      ▒   │
│    ( ) kbd-altlock                                                       ▒   │
│    ( ) kbd-shiftllock                                                    ▒   │
│    ( ) kbd-shiftrlock                                                    ▒   │
│    ( ) kbd-ctrlllock                                                     ▒   │
│    ( ) kbd-ctrlrlock                                                     ▒   │
│    ( ) disk-activity                                                         │
│             (and more)                                                       │
│                                                                              │
│                     <Ok>                         <Cancel>                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

4. Use the `up` and `down` arrow keys to select which you like and press `Space` to confirm, a `*` would appeare on the `( )` like step 2.
5. Press `Enter` to save your choose and aplly it.
6. Your LED status would change after step 5 at once.
