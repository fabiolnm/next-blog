import {
  List, ListItemButton, ListItemText, Typography
} from '@mui/material'
import Link from 'next/link'

interface ArchivesProps {
  items: ReadonlyArray<{
    url: string
    title: string
  }>
}

export default function Archives (props: ArchivesProps) {
  const { items } = props

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      <List
        sx={{
          width: '100%',
          maxHeight: 300,
          overflow: 'auto',
          position: 'relative',
          bgcolor: 'background.paper',
          borderRadius: 1,
          '& ul': { padding: 0 },
        }}
      >
        {items.map(({ url, title }) => (
          <ListItemButton LinkComponent={Link} key={`item-${url}`} href={url}>
            <ListItemText primary={title} />
          </ListItemButton>
        ))}
      </List>
    </>
  )
}
