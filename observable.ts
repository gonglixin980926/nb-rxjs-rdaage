import { Observable } from "rxjs";
export function showObs() {
  const observable = Observable.create(function(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  });

  const observer1 = {
    next: x => console.log("got value1 " + x),
    error: err => console.error("something wrong occurred: " + err),
    complete: () => console.log("done")
  };

  const observer2 = {
    next: x => console.log("got value2 " + x),
    error: err => console.error("something wrong occurred: " + err),
    complete: () => console.log("done")
  };

  const subscription1 = observable.subscribe(observer1);
  const subscription2 = observable.subscribe(observer2);

  setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
  }, 500);
}
