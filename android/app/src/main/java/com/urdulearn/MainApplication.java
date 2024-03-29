package com.urdulearn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.cboy.rn.splashscreen.SplashScreenReactPackage;
import com.pilloxa.backgroundjob.BackgroundJobPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.zmxv.RNSound.RNSoundPackage; // <-- New
import org.pgsqlite.SQLitePluginPackage;// <-- New

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactMaterialKitPackage(),
            new SplashScreenReactPackage(),
            new BackgroundJobPackage(),
          new RNDeviceInfo(), // <-- New
          new RNSoundPackage(), // <-- New
          new SQLitePluginPackage()   // register SQLite Plugin here
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
