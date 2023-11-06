import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react'

import s from './typography.module.css'

export type TextProps<T extends ElementType = 'p'> = {
    as?: T
    children: ReactNode
    variant?:
        | 'large'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'body1'
        | 'body2'
        | 'subtitle1'
        | 'subtitle2'
        | 'caption'
        | 'overline'
        | 'link1'
        | 'link2'
        | 'error'
        | 'label'

    className?: string
} & ComponentPropsWithoutRef<T>

export function Typography<T extends ElementType = 'p'>(
    {
        as,
        className,
        variant = 'body1',
        ...restProps
    }: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
    const Component = as || 'p'

    return <Component className={`${s.text} ${s[variant]} ${className ?? ''}`} {...restProps} />
}