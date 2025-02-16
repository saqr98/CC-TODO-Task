/**
 * The basic interface used by every task in the
 * application to represent its data.
 */
export interface ITask {
    id: number;
    todo : string;
    done: boolean;
}