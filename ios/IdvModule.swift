//
//  IdvSdk.swift
//  idv_sdk
//
//  Created by Muhib Aleem on 02/02/2025.
//

import Foundation



import UIKit
import IDV
@objc(IdvModule)
class IdvModule: NSObject {
  @objc func initializeFramework(_ authData: NSDictionary, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
      DispatchQueue.main.async {
          let frameworkObj = IDVFramework()
          let authObj: [String: String] = [
              "apiKey": authData["apiKey"] as? String ?? "",
              "apiSecret": authData["apiSecret"] as? String ?? "",
              "userId": authData["userId"] as? String ?? UUID().uuidString
          ]
          guard let rootViewController = UIApplication.shared.windows.first?.rootViewController,
              let navigationController = self.findNavigationController(from: rootViewController),
                let topVC = navigationController.topViewController
          else {
                rejecter("NO_VIEW_CONTROLLER", "Unable to find UINavigationController or top ViewController", nil)
              return
          }
          frameworkObj.launchIDV(preset: 7, authObject: authObj, viewControl: topVC)
          resolver("Framework launched successfully")
      }
  }
  private func findNavigationController(from viewController: UIViewController) -> UINavigationController? {
      if let navController = viewController as? UINavigationController {
          return navController
      }
      return viewController.children.compactMap { $0 as? UINavigationController }.first
  }}
