import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
  standalone: true // ✅ Standalone bo‘lishi kerak!
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: string[], query: string): string[] {
    if (!query) return tasks;
    return tasks.filter(task => task.toLowerCase().includes(query.toLowerCase()));
  }
}
