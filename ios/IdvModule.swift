//
//  IdvSdk.swift
//  idv_sdk
//
//  Created by Muhib Aleem on 02/02/2025.
//

import Foundation

@objc(IdvModule)
class IdvModule: NSObject {
  
  @objc
  func sayHelloToJava() {
    print("Hello World Hi")
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
