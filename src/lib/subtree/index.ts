export class SubTreeNode<T> {
    value: T
    children: SubTreeNode<T>[]
    properties: { [key: string]: any }

    constructor(value: T, properties: { [key: string]: any } = {}) {
        this.value = value
        this.children = []
        this.properties = properties
    }

    addChild(child: SubTreeNode<T>): void {
        this.children.push(child)
    }

    setProperty(key: string, value: any): void {
        this.properties[key] = value
    }

    getProperty(key: string): any {
        return this.properties[key]
    }
}

export class SubTree<T> {
    root: SubTreeNode<T> | null = null

    addNode(value: T, parentValue: T | null = null, properties: { [key: string]: any } = {}): SubTreeNode<T> {
        const newNode = new SubTreeNode(value, properties)
        if (parentValue === null) {
            if (this.root === null) {
                this.root = newNode
            }
        } else {
            const parentNode = this.findNode(parentValue)
            if (parentNode) {
                parentNode.addChild(newNode)
            } else {
                throw new Error(`Parent node with value ${parentValue} not found`)
            }
        }
        return newNode
    }

    private removeNodeRecursively(node: SubTreeNode<T>, value: T): boolean {
        if (!node?.children) return false
        if (node.children.length === 0) return false
        for (let i = 0; i < node.children.length; i++) {
            if (node?.children[i]?.value === value) {
                node.children.splice(i, 1)
                return true
            } else {
                const child: SubTreeNode<T> | undefined = node.children[i]
                if (child) {
                    if (this.removeNodeRecursively(child, value)) {
                        return true
                    }
                }
            }
        }
        return false
    }    

    removeNode(value: T): void {
        if (this.root === null) return
        if (this.root.value === value) {
            this.root = null
        } else {
            this.removeNodeRecursively(this.root, value)
        }
    }

    findNode(value: T): SubTreeNode<T> | null {
        if (this.root === null) {
            return null
        }
        return this.findNodeRecursively(this.root, value)
    }

    findParent(value: T, node: SubTreeNode<T> | null = this.root, parent: SubTreeNode<T> | null = null): SubTreeNode<T> | null {
        if (node === null) return null
        if (node.value === value) return parent
        for (const child of node.children) {
            const result = this.findParent(value, child, node)
            if (result) return result
        }
        return null
    }    

    private findNodeRecursively(node: SubTreeNode<T>, value: T): SubTreeNode<T> | null {
        if (node.value === value) {
            return node
        }
        for (const child of node.children) {
            const foundNode = this.findNodeRecursively(child, value)
            if (foundNode) {
                return foundNode
            }
        }
        return null
    }

    preOrderTraversal(node: SubTreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node === null) return result
        result.push(node.value)
        for (const child of node.children) {
            this.preOrderTraversal(child, result)
        }
        return result
    }

    postOrderTraversal(node: SubTreeNode<T> | null = this.root, result: T[] = []): T[] {
        if (node === null) return result
        for (const child of node.children) {
            this.postOrderTraversal(child, result)
        }
        result.push(node.value)
        return result
    }

    levelOrderTraversal(): T[] {
        const result: T[] = []
        if (this.root === null) return result
        const queue: SubTreeNode<T>[] = [this.root]
        while (queue.length > 0) {
            const node = queue.shift()!
            result.push(node.value)
            queue.push(...node.children)
        }
        return result
    }  
    
    getHeight(node: SubTreeNode<T> | null = this.root): number {
        if (node === null) return 0
        let height = 0
        for (const child of node.children) {
            height = Math.max(height, this.getHeight(child))
        }
        return height + 1
    }    

    isBalanced(node: SubTreeNode<T> | null = this.root): boolean {
        if (node === null) return true
        const heights = node.children.map(child => this.getHeight(child))
        const max = Math.max(...heights)
        const min = Math.min(...heights)
        return max - min <= 1 && node.children.every(child => this.isBalanced(child))
    }

    toJSON(): string {
        return JSON.stringify(this.root, null, 2)
    }
    
    static fromJSON<T>(json: string): SubTree<T> {
        const obj = JSON.parse(json)
        const tree = new SubTree<T>()
        if (obj) {
            tree.root = SubTree.parseNode(obj)
        }
        return tree
    }   
    
    private static parseNode<T>(obj: any): SubTreeNode<T> {
        const node = new SubTreeNode<T>(obj.value, obj.properties)
        if (obj.children) {
            for (const child of obj.children) {
                node.addChild(SubTree.parseNode(child))
            }
        }
        return node
    }    

    findNodeAsJSON(value: T): string | null {
        const node = this.findNode(value)
        if (node) {
            return JSON.stringify(node, null, 2)
        } else {
            return null
        }
    }    
}
