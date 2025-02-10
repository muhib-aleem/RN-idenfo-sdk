package com.idv_sdk

import android.content.Intent
import android.os.Bundle
import android.service.controls.ControlsProviderService
import android.util.Log
import com.example.idenfoidv.entites.model.IDVINTIALIZEMODEL
import com.example.idenfoidv.ui.activities.RealSplashScreen
import com.example.idenfoidv.utils.StaticVarAndFuc
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class IdvModule(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "IdvModule"
    }

    @ReactMethod
    fun openNativeActivity(promise: Promise) {
        val bundle = Bundle()


        try {
            Log.d("TAG", "openNativeActivity: ")
            val sdkIntent = Intent(currentActivity, RealSplashScreen::class.java)
            StaticVarAndFuc.initialize(reactApplicationContext)
            bundle.putParcelable(
                StaticVarAndFuc.IDV_DATA,
                IDVINTIALIZEMODEL("1", null, apiKey = "0131c457-583a-4406-8fad-ab7283a66b7f", apiSecret = "8899c5e16e2f3e98f73c3296b043c450e21b6bcd")
            )
            sdkIntent.putExtras(bundle)
            currentActivity?.startActivity(sdkIntent)
            promise.resolve("Activity opened")
        } catch (e: Exception) {
            promise.reject("ERROR", "Failed to open activity")
        }
    }
}