//
//  IdvModule.m
//  idv_sdk
//
//  Created by Muhib Aleem on 02/02/2025.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface
RCT_EXTERN_MODULE(IdvModule, NSObject)
RCT_EXTERN_METHOD(initializeFramework:(NSDictionary *)authData
  resolver:(RCTPromiseResolveBlock)resolver
  rejecter:(RCTPromiseRejectBlock)rejecter)
@end
