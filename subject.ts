import { Subject, Observable } from "rxjs";
export function showSubject() {
  const observable = Observable.create(function(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  });
  const subject = new Subject();

  subject.subscribe({
    next: x => console.log("got value1 " + x),
    error: err => console.error("something wrong occurred: " + err),
    complete: () => console.log("done")
  });
  subject.subscribe({
    next: x => console.log("got value2 " + x),
    error: err => console.error("something wrong occurred: " + err),
    complete: () => console.log("done")
  });
  const subscription = observable.subscribe(subject);

  setTimeout(() => {
    subscription.unsubscribe();
  }, 500);
}
