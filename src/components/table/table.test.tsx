import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Root as Table, Header, Body, Row, HeaderCell, Cell } from './table';

describe('Table', () => {
	it('renders table with compound structure', () => {
		renderComponent(
			<Table>
				<Header>
					<Row>
						<HeaderCell>Employee</HeaderCell>
						<HeaderCell>Department</HeaderCell>
						<HeaderCell>Status</HeaderCell>
					</Row>
				</Header>
				<Body>
					<Row>
						<Cell>Jim Halpert</Cell>
						<Cell>Sales</Cell>
						<Cell>Active</Cell>
					</Row>
					<Row>
						<Cell>Dwight Schrute</Cell>
						<Cell>Sales</Cell>
						<Cell>Active</Cell>
					</Row>
				</Body>
			</Table>,
		);

		expect(screen.getByRole('table')).toBeInTheDocument();
		expect(screen.getByText('Employee')).toBeInTheDocument();
		expect(screen.getByText('Jim Halpert')).toBeInTheDocument();
		expect(screen.getByText('Dwight Schrute')).toBeInTheDocument();
	});

	it('renders with text alignment', () => {
		renderComponent(
			<Table>
				<Header>
					<Row>
						<HeaderCell textAlign="start">Name</HeaderCell>
						<HeaderCell textAlign="center">Role</HeaderCell>
						<HeaderCell textAlign="end">Salary</HeaderCell>
					</Row>
				</Header>
				<Body>
					<Row>
						<Cell textAlign="start">Michael Scott</Cell>
						<Cell textAlign="center">Regional Manager</Cell>
						<Cell textAlign="end">$60,000</Cell>
					</Row>
				</Body>
			</Table>,
		);

		expect(screen.getByText('Michael Scott')).toBeInTheDocument();
		expect(screen.getByText('Regional Manager')).toBeInTheDocument();
		expect(screen.getByText('$60,000')).toBeInTheDocument();
	});

	it('renders with props', () => {
		renderComponent(
			<Table variant="surface" size="1" compact striped>
				<Body>
					<Row>
						<Cell>Data</Cell>
					</Row>
				</Body>
			</Table>,
		);

		expect(screen.getByRole('table')).toBeInTheDocument();
	});
});
