package com.idv_sdk;
import static android.service.controls.ControlsProviderService.TAG;

import android.media.MediaPlayer;
import android.media.PlaybackParams;
import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class IdvModule extends ReactContextBaseJavaModule {

    IdvModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "IdvModule";
    }

    // create functions for sdk
    @ReactMethod
    public void sayHelloToJava(){
        Log.i(TAG, "sayHelloToJava: Hello Brother");
    }

}