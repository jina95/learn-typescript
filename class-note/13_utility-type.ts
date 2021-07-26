interface Product {
  id: number
  name: string
  price: number
  brand: string
  stock: number
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

// interface ProductDetail {
//   id: number
//   name: string
//   price: number
// }

// 2. 특정 상품의 상세정보를 나타내기 위한 함수
// Product 에서 id, name , price 를 가져온 값이 shoppingItem
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem) {}

type ExamPaper = {
  id: string
  name: string
  examId: string
  examKind: string
}

type Exam = Omit<ExamPaper, 'id' | 'name'>

// interface UpdateProduct {
//   id?: number
//   name?: string
//   price?: number
//   brand?: string
//   stock?: number
// }

type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: UpdateProduct) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string
  email: string
  profilUrl: string
}

// interface UserProfileUpdate {
//     username?: string
//     email?: string
//     profilUrl?: string
// }
// #1
// t ype UserProfileUpdate = {
//   username?: UserProfile['username']
//   email?: UserProfile['email']
//   profilUrl?: UserProfile['profilUrl']
// }

// #2
// 위의 타입을 아래 처럼 축약  -> 맵드타입
// type UserProfileUpdate = {
//     // 속성들이 한번씩 다 반복문을 탄다(username, ...)
//     [p in 'username' | 'email' | 'profilUrl']? : UserProfile[p]
// }
// type UserProfileKeys = keyof UserProfile // 'username' | 'email' | 'profilUrl'

// #3
type UserProfileUpdate = {
  [// 속성들이 한번씩 다 반복문을 탄다(username, ...)
  p in keyof UserProfile]?: UserProfile[p]
}

// #4 partial 의 모습
type Subset<T> = { [p in keyof T]?: T[p] }
