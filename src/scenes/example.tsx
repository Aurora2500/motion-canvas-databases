import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { waitFor } from '@motion-canvas/core/lib/flow';
import Database, { DatabaseData } from 'components/Database';

const dogTable: DatabaseData<['name', 'breed', 'age']> = {
	headers: [
		'name',
		'breed',
		'age'
	],
	rows: [
		{
			name: 'Fido',
			breed: 'Labrador',
			age: 3
		},
		{
			name: 'Spot',
			breed: 'Poodle',
			age: 2
		},
		{
			name: 'Rover',
			breed: 'Golden Retriever',
			age: 4
		}
	]
};

export default makeScene2D(function* (view) {
	// Create your animations here

	view.add(
		<Database
			data={dogTable}
		/>
	);

	yield* waitFor(5);
});
