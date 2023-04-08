type Task = () => Promise<any>;

export class TaskQueue {
    private tasks: Task[];
    private concurrentTasks: number;
    private activeTasks: number;

    constructor(concurrentTasks: number) {
        this.tasks = [];
        this.concurrentTasks = concurrentTasks;
        this.activeTasks = 0;
    }
    enqueue(task: Task) {
        this.tasks.push(task);
    }

    async processQueue(): Promise<void> {
        if (this.activeTasks >= this.concurrentTasks || this.tasks.length === 0) {
            return;
        }

        const task = this.tasks.shift();
        if (task) {
            this.activeTasks++;
            try {
                await task();
            } catch (error) {
                console.error("Task failed:", error);
            } finally {
                this.activeTasks--;
                this.processQueue();
            }
        }
    }
}
