import { Layout, Rect, RectProps, Shape, ShapeProps, Text } from '@motion-canvas/2d/lib/components';
import { SignalValue } from '@motion-canvas/core/lib/signals';

export interface DatabaseData<A extends string[]> {
	headers: A;
	rows: {
		[K in A[number]]: string | number;
	}[];
}

export interface DatabaseProps<A extends string[]> extends ShapeProps {
	data: DatabaseData<A>
	x?: SignalValue<number>,
	y?: SignalValue<number>,
}



export default class Database<A extends string[]> extends Shape {
	constructor(props: DatabaseProps<A>) {
		super(props);
		this.add(
			<Rect
				width={props.width}
				height={props.height}
				fill={'#fff'}
				{...props}
				layout
				padding={20}
				gap={30}
			>
				{props.data.headers.map((header, i) => (
					<Layout direction='column' alignItems={'end'}>
						<Rect>
							<Text>{header}</Text>
						</Rect>
						{props.data.rows.map((row, j) => (
							<Text>{row[header as keyof typeof row].toString()}</Text>
						))}
					</Layout>
				))}
			</Rect>
		);
	}
}