/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonProps
  extends svelte.JSX.DOMAttributes<HTMLElementTagNameMap["a"]>,
    svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default null
   */
  class?: string | false | null;

  /**
   * Adds a filled background to the button.
   * Mutually exclusive with `outline` and `selected`.
   * @default false
   */
  filled?: boolean;

  /**
   * Adds a border to the button.
   * Mutually exclusive with `filled`.
   * @default false
   */
  outline?: boolean;

  /**
   * Gives the button a color of danger (red by default).
   * Mutually exclusive with `neutral`.
   * @default false
   */
  danger?: boolean;

  /**
   * Gives the button a neutral color (very dark gray by default).
   * Mutually exclusive with `danger`.
   * @default false
   */
  neutral?: boolean;

  /**
   * Adjusts the padding to be equal on all sides. Great for icon-only buttons.
   * @default false
   */
  round?: boolean;

  /**
   * Halves the border radius and increases the padding. Well-suited for large menus.
   * @default false
   */
  rectangle?: boolean;

  /**
   * Cuts the padding to make the button smaller.
   * @default false
   */
  small?: boolean;

  /**
   * Gives the button a tinted background. Suitable for indicating the selected item.
   * Mutually exclusive with `filled`.
   * @default false
   */
  selected?: boolean;

  /**
   * Disables the ripple effect.
   * @default false
   */
  noRipple?: boolean;

  /**
   * Disables the button, styling it appropriately and disabling click events.
   * @default false
   */
  disabled?: boolean;

  /**
   * Turns the button into a link (prefetch-enabled for Sapper).
   * @default null
   */
  href?: string | null;

  /**
   * Disables Sapper (or SvelteKit) prefetching for link buttons (those with an href prop).
   * @default false
   */
  noPrefetch?: boolean;

  /**
   * List of handlers for the [Events](https://illright.github.io/attractions/docs/utilities) action.
   * @default []
   */
  events?: Array<{ name: string; handler: (e: Event) => void }>;

  /**
   * SvelteKit attribute to enable data prefetching
   * if a link is hovered over or touched on mobile.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-prefetch
   * @default false
   */
  "sveltekit:prefetch"?: boolean;

  /**
   * SvelteKit attribute to trigger a full page
   * reload after the link is clicked.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-reload
   * @default false
   */
  "sveltekit:reload"?: boolean;

  /**
   * SvelteKit attribute to prevent scrolling
   * after the link is clicked.
   * @see https://kit.svelte.dev/docs/a-options#sveltekit-noscroll
   * @default false
   */
  "sveltekit:noscroll"?: boolean;
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: CustomEvent<{ nativeEvent: MouseEvent }> },
  { default: {} }
> {}
