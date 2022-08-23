import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context'

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}