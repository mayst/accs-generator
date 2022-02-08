import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import IDraftContact from '@/models/IDraftContact';

function Draft({ draft }: { draft: IDraftContact }) {
    return (
        <Card variant="outlined" sx={{ width: 1 / 4, maxWidth: 350, opacity: 0.5, mb: 2 }}>
            <CardHeader title="Draft contact" />

            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography gutterBottom variant="h6" component="div">
                    { draft.nickname }
                </Typography>
                <Avatar src={draft.avatar} />
            </CardContent>
        </Card>
    )
}

export default Draft;
