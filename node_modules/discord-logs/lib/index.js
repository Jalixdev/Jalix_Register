"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var handlers_1 = require("./handlers");
var eventRegistered = false;
module.exports = function (client) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (eventRegistered)
            return [2 /*return*/];
        eventRegistered = true;
        /* HANDLE CHANNEL EVENTS */
        client.on('channelUpdate', function (oldChannel, newChannel) {
            handlers_1.handleChannelUpdateEvent(client, oldChannel, newChannel);
        });
        /* HANDLE MEMBER EVENTS */
        client.on('guildMemberUpdate', function (oldMember, newMember) {
            handlers_1.handleGuildMemberUpdateEvent(client, oldMember, newMember);
        });
        /* HANDLE GUILD EVENTS */
        client.on('guildUpdate', function (oldGuild, newGuild) {
            handlers_1.handleGuildUpdateEvent(client, oldGuild, newGuild);
        });
        /* HANDLE MESSAGE UPDATE EVENTS */
        client.on('messageUpdate', function (oldMessage, newMessage) {
            handlers_1.handleMessageUpdateEvent(client, oldMessage, newMessage);
        });
        /* HANDLE PRESENCE UPDATE EVENTS */
        client.on('presenceUpdate', function (oldPresence, newPresence) {
            handlers_1.handlePresenceUpdateEvent(client, oldPresence, newPresence);
        });
        /* HANDLE ROLE EVENTS */
        client.on('roleUpdate', function (oldRole, newRole) {
            handlers_1.handleRoleUpdateEvent(client, oldRole, newRole);
        });
        /* HANDLE USER EVENTS */
        client.on('userUpdate', function (oldUser, newUser) {
            handlers_1.handleUserUpdateEvent(client, oldUser, newUser);
        });
        /* HANDLE VOICE STATE UPDATE */
        client.on('voiceStateUpdate', function (oldState, newState) {
            handlers_1.handleVoiceStateUpdateEvent(client, oldState, newState);
        });
        return [2 /*return*/];
    });
}); };
