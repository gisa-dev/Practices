import {Card, CardContent, Grid, TextField, Typography} from '@mui/material';

const TaskForm = () => {
	return (
		<Grid
			container
			alignItems="center"
			justifyContent="center"
			direction="column"
		>
			<Grid item xs={3}>
				<Card sx={{mt: 5}}>
					<Typography>Create Task</Typography>
					<CardContent>
						<form>
							<TextField variant="filled" placeholder="testing" />
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default TaskForm;
