/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.head = 0;
    this.tail = 0;
    this.size = k-1;
    this.count = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.count < this.size+1){
        if(this.count === 0){
            ;
        }
        else if(this.tail < this.size){
            this.tail++;
        }else{
            this.tail = 0;
        }
        this.queue[this.tail] = value;
        this.count++;
        return true;
    }else{
        return false;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.count === 0 ){
        return false;
    }else{
        this.queue[this.head] = undefined;
        if(this.head === this.tail){
            this.head = 0;
            this.tail = 0;
        }
        else{
            this.head++;
        }
        console.log(this.head);
        this.count--;
        return true;
    }
    
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.count > 0)
        return this.queue[this.head];
    else
        return -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.queue[this.tail] != undefined)
        return this.queue[this.tail];
    else
        return -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
   if(this.count === 0){
       return true;
   }else{
       return false;
   }
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.count === this.size+1)
        return true;
    else
        return false;
};

/** 
 * The MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */