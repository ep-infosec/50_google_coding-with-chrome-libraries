/**
 * @fileoverview Sphero 2.0 monitoring logic.
 *
 * @license Copyright 2018 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.module('cwc.lib.protocol.sphero.sphero2.Monitoring');

const EventHandler = goog.require('cwc.lib.utils.event.Handler');
const Logger = goog.require('cwc.lib.utils.log.Logger');
const Timer = goog.require('goog.Timer');


/**
 * @class
 */
class Monitoring {
  /**
   * @param {!cwc.lib.protocol.sphero.sphero2.Api'} api
   */
  constructor(api) {
    /** @type {!cwc.lib.protocol.sphero.sphero2.Api'} */
    this.api = api;

    /** @type {string} */
    this.name = 'Sphero 2.0 Monitoring';

    /** @type {boolean} */
    this.monitor = false;

    /** @type {number} */
    this.monitorLocationInterval = 1000; // Duration in ms.

    /** @type {!Timer} */
    this.monitorLocation = new Timer(this.monitorLocationInterval);

    /** @type {boolean} */
    this.started = false;

    /** @private {!cwc.utils.Events} */
    this.events_ = new EventHandler(this.name);

   // Monitor Events
    this.events_.listen(this.monitorLocation, Timer.TICK,
      this.updateLocation.bind(this));

    /** @private {!cwc.utils.Logger|null} */
    this.log_ = new Logger(this.name);
  }


  /**
   * Starts the monitoring.
   */
  start() {
    if (this.started) {
      return;
    }
    this.log_.info('Starting...');
    this.monitorLocation.start();
    this.started = true;
  }


  /**
   * Stops the port monitoring.
   */
  stop() {
    if (!this.started) {
      return;
    }
    this.log_.info('Stopping...');
    this.monitorLocation.stop();
    this.started = false;
  }


  /**
   * Clean up monitoring.
   */
  cleanUp() {
    this.log_.info('Clean up ...');
    this.stop();
    this.events_.clear();
  }


  /**
   * Updates the current location of the Sphero device.
   */
  updateLocation() {
    this.api.exec('getLocation');
  }
}


exports = Monitoring;
