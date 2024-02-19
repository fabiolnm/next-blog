'use client'

import { ListItemIcon, MenuItem, Select } from "@mui/material"
import { BR, US, FR } from "country-flag-icons/react/3x2"
import { usePathname, useRouter } from "next/navigation"

export function LanguageSelector({ lang }: { lang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Select value={lang || 'en'}
      size="small"
      sx={{
        p: 0,
        '.MuiSelect-select': {
          py: 0.25,
          pr: '0 !important',
        },
        '.MuiListItemIcon-root': {
          pt: 0.5,
          height: 16,
        },
      }}
      onChange={(e) => {
        const currentPath = pathname === `/${lang}`
          ? '/' : pathname.replace(`/${lang}/`, '/')

        router.push(`/${e.target.value}${currentPath}`)
      }}
    >
      <MenuItem value="en" sx={{ p: 0.2, justifyContent: 'center' }}>
        <ListItemIcon>
          <US />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value="br" sx={{ p: 0.2, justifyContent: 'center' }}>
        <ListItemIcon>
          <BR />
        </ListItemIcon>
      </MenuItem>
      <MenuItem value="fr" sx={{ p: 0.2, justifyContent: 'center' }}>
        <ListItemIcon>
          <FR />
        </ListItemIcon>
      </MenuItem>
    </Select>
  )
}
