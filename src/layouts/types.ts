import type { RouteLocationRaw } from 'vue-router'

declare type ATagTargetAttrValues = '_blank' | '_self' | '_parent' | '_top' | 'framename'
declare type ATagRelAttrValues =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag'

export interface NavSectionTitle {
    heading: string
}

export interface NavLinkProps {
    to?: RouteLocationRaw | string | any
    href?: string
    target?: ATagTargetAttrValues
    rel?: ATagRelAttrValues
}

export interface NavLink extends NavLinkProps {
    title: string
    icon?: unknown
}


export interface NavGroup {
    title: string
    icon?: unknown
    children: (NavLink | NavGroup)[]
}

export declare type VerticalNavItems = (NavLink | NavGroup | NavSectionTitle)[]
