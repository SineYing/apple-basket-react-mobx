import { observable, computed, action, configure } from 'mobx';

configure({ enforceActions: 'observed' })
class AppleStore {
    @observable apples = [
        {
            id: 0,
            weight: 233,
            isEaten: false
        },
        {
            id: 1,
            weight: 235,
            isEaten: true
        },
        {
            id: 2,
            weight: 256,
            isEaten: false
        }
    ];
    @observable newAppleId = 3;
    @observable isPicking = false;
    @observable buttonText = '摘苹果';
    @observable buttonText111 = '摘苹果111';

    /**  计算当前已吃和未吃苹果的状态 */
    @computed get status() {
        let status = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };
        this.apples.forEach(apple => {
            let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
            status[selector].quantity++;
            status[selector].weight += apple.weight;
        });
        return status;
    }


    /*摘苹果的异步操作*/
    @action pickApple = () => {
        this.buttonText111 = 111
        console.log(this.buttonText111)
        /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
        if (this.isPicking) {
            return;
        }
        this.isPicking = true;
        this.buttonText = '正在采摘...';
        let weight = Math.floor(200 + Math.random() * 50);
        this.isPicking = false;
        this.buttonText = '摘苹果';
        this.apples.push({
            id: this.newAppleId++,
            weight: weight,
            isEaten: false
        });
        console.log(this.apples)
    }

    @action eatApple = (appleId) => {
        let targetIndex = '';
        this.apples.forEach((apple, index) => {
            if (apple.id === appleId) {
                targetIndex = index
            }
        });
        this.apples[targetIndex].isEaten = true;
    }

}

const applesBox = new AppleStore()

export default applesBox;