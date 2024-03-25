import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseDestroyable implements OnDestroy {
  protected readonly destroy$: Subject<void>;

  constructor() {
    this.destroy$ = new Subject();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
