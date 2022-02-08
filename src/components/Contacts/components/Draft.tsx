import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import IDraftContact from '@/models/IDraftContact';

const styles = (theme) => ({
    width: 1 / 4,
    maxWidth: 350,
    opacity: 0.5,
    mb: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
});

function Draft({ draft }: { draft: IDraftContact }) {
    return (
        <Card
            variant="outlined"
            sx={styles}
        >
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
