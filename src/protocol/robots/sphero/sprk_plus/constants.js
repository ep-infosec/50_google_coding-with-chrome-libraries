/**
 * @fileoverview Sphero SPRK+ General definitions of devices and bytecodes.
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
goog.module('cwc.lib.protocol.sphero.sprkPlus.Constants');


/**
 * @enum {!Array}
 */
exports.AntiDOS = {
  DEVELOPER_MODE: [0x30, 0x31, 0x31, 0x69, 0x33],
};


/**
 * @enum {number}
 */
exports.CallbackType = {
  NONE: 0x00,
  DEVICE_INFO: 0x05,
  LOCATION: 0x10,
  RGB: 0x15,
  VERSION: 0x20,
  UNKNOWN: 0xF0,
};


/**
 * @enum {!Object.<!Array>|!Array}
 */
exports.Command = {
  SYSTEM: {
    PING: [0x00, 0x01],
    VERSION: [0x00, 0x02],
    DEVICE_NAME: {
      SET: [0x00, 0x10],
    },
    DEVICE_INFO: [0x00, 0x11],
    AUTO_RECONNECT: {
      SET: [0x00, 0x12],
      GET: [0x00, 0x13],
    },
    POWER_STATE: [0x00, 0x20],
    SLEEP: [0x00, 0x22],
    INACTIVITY_TIMEOUT: [0x00, 0x25],
  },
  HEADING: [0x02, 0x01],
  STABILIZATION: [0x02, 0x02],
  ROTATION_RATE: [0x02, 0x03],
  SELF_LEVEL: [0x02, 0x09],
  DATA_STREAMING: [0x02, 0x11],
  COLLISION_DETECTION: [0x02, 0x12],
  LOCATION: {
    SET: [0x02, 0x13],
    GET: [0x02, 0x15],
  },
  RGB_LED: {
    SET: [0x02, 0x20],
    GET: [0x02, 0x22],
  },
  BACK_LED: [0x02, 0x21],
  ROLL: [0x02, 0x30],
  BOOST: [0x02, 0x31],
  MOVE: [0x02, 0x32],
  POWER: [0x02, 0x33],
  MOTION_TIMEOUT: [0x02, 0x34],
};


/**
 * @enum {!Object.<number>}
 */
exports.CommandType = {
  DIRECT: {
    REPLY: 0xFF,
    NOREPLY: 0xFE,
  },
};


/**
 * @enum {number}
 */
exports.ResponseType = {
  ACKNOWLEDGEMENT: 0xFF,
  ASYNCHRONOUS: 0xFE,
};


/**
 * @enum {number}
 */
exports.MessageType = {
  PRE_SLEEP: 0x05,
  COLLISION_DETECTED: 0x07,
};
