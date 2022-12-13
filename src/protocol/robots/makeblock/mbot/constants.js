/**
 * @fileoverview mBot general definitions of devices and bytecodes.
 *
 * @license Copyright 2016 Shenzhen Maker Works Co, Ltd. All Rights Reserved.
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
 * @author wangyu@makeblock.cc (Yu Wang)
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.module('cwc.lib.protocol.makeblock.mBot.Constants');


/**
 * In future developments, this should be replaced by a state machine.
 * @enum {number}
 */
exports.ByteType = {
  INDEX: 2,
  DATATYPE: 3,
  PAYLOAD: 4,
};


/**
 * Enum of command types for the communication protocol.
 * @enum {number}
 */
exports.CommandType = {
  GET: 0x01,
  RUN: 0x02,
  RESET: 0x04,
  START: 0x05,
};


/**
 * Enum of data types.
 * @enum {number}
 */
exports.DataType = {
  BYTE: 1,
  FLOAT: 2,
  SHORT: 3,
  STRING: 4,
};


/**
 * Enum of devices for the communication protocol.
 * @enum {number}
 */
exports.Device = {
  VERSION: 0,
  ULTRASONIC: 1,
  LIGHTSENSOR: 3,
  LEDLIGHT: 8,
  DCMOTOR: 10,
  IR: 13,
  IRREMOTE: 14,
  LINEFOLLOWER: 17,
  BUTTON: 22,
  BUZZER: 34,
};


/**
 * Header for the communication protocol.
 * @type {!Array}
 */
exports.Header = [0xff, 0x55];


/**
 * Enum of implemented callback types.
 * @enum {number}
 */
exports.CallbackType = {
  NONE: 0x00,
  ULTRASONIC: 0x10,
  LINEFOLLOWER: 0x11,
  LIGHTSENSOR: 0x12,
  VERSION: 0x20,
  INNER_BUTTON: 0x80,
};


/**
 * Enum of ports for the communication protocol.
 * @enum {number}
 */
exports.Port = {
  ULTRASONIC: 0x03,
  LINEFOLLOWER: 0x02,
  LIGHTSENSOR: 0x06,
  LED_LIGHT: 0x07,
  LEFT_MOTOR: 0x09,
  RIGHT_MOTOR: 0x0A,
};


/**
 * Enum of commands for the communication protocol.
 * @enum {number}
 */
exports.Slot = {
  LED_LIGHT: 0x02,
};
