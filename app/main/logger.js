'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LOG = 'log';
const WARN = 'warning';
const ERROR = 'error';

const LEVELS = {
  log: LOG,
  warn: WARN,
  error: ERROR
};

class Logger {
  constructor(logPath) {
    this.withContext = context => {
      const logger = this;

      return {
        log: (...args) => this.output(LOG, context, ...args),
        warn: (...args) => this.output(WARN, context, ...args),
        error: (...args) => this.output(ERROR, context, ...args)
      };
    };

    this.output = (level, context, ...args) => {
      this.write(this.prefix(LEVELS[level] || LOG, context) + ' ' + (0, _util.format)(...args));

      console[level](...args);
    };

    this.log = (...args) => {
      this.output(LOG, null, ...args);
    };

    this.warn = (...args) => {
      this.output(WARN, null, ...args);
    };

    this.warn = (...args) => {
      this.output(ERROR, null, ...args);
    };

    this._path = logPath;
    this._logFilePath = _path2.default.join(this._path, 'fulcrum.log');
  }

  write(content) {
    if (content != null) {
      _fs2.default.appendFileSync(this._logFilePath, content.toString() + '\n');
    }
  }

  prefix(level, context) {
    return `[${new Date().toISOString()}] [${level}]` + (context ? ` [${context}]` : '');
  }
}
exports.default = Logger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL2xvZ2dlci5qcyJdLCJuYW1lcyI6WyJMT0ciLCJXQVJOIiwiRVJST1IiLCJMRVZFTFMiLCJsb2ciLCJ3YXJuIiwiZXJyb3IiLCJMb2dnZXIiLCJjb25zdHJ1Y3RvciIsImxvZ1BhdGgiLCJ3aXRoQ29udGV4dCIsImNvbnRleHQiLCJsb2dnZXIiLCJhcmdzIiwib3V0cHV0IiwibGV2ZWwiLCJ3cml0ZSIsInByZWZpeCIsImNvbnNvbGUiLCJfcGF0aCIsIl9sb2dGaWxlUGF0aCIsImpvaW4iLCJjb250ZW50IiwiYXBwZW5kRmlsZVN5bmMiLCJ0b1N0cmluZyIsIkRhdGUiLCJ0b0lTT1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTSxLQUFaO0FBQ0EsTUFBTUMsT0FBTyxTQUFiO0FBQ0EsTUFBTUMsUUFBUSxPQUFkOztBQUVBLE1BQU1DLFNBQVM7QUFDYkMsT0FBS0osR0FEUTtBQUViSyxRQUFNSixJQUZPO0FBR2JLLFNBQU9KO0FBSE0sQ0FBZjs7QUFNZSxNQUFNSyxNQUFOLENBQWE7QUFDMUJDLGNBQVlDLE9BQVosRUFBcUI7QUFBQSxTQVdyQkMsV0FYcUIsR0FXTkMsT0FBRCxJQUFhO0FBQ3pCLFlBQU1DLFNBQVMsSUFBZjs7QUFFQSxhQUFPO0FBQ0xSLGFBQUssQ0FBQyxHQUFHUyxJQUFKLEtBQWEsS0FBS0MsTUFBTCxDQUFZZCxHQUFaLEVBQWlCVyxPQUFqQixFQUEwQixHQUFHRSxJQUE3QixDQURiO0FBRUxSLGNBQU0sQ0FBQyxHQUFHUSxJQUFKLEtBQWEsS0FBS0MsTUFBTCxDQUFZYixJQUFaLEVBQWtCVSxPQUFsQixFQUEyQixHQUFHRSxJQUE5QixDQUZkO0FBR0xQLGVBQU8sQ0FBQyxHQUFHTyxJQUFKLEtBQWEsS0FBS0MsTUFBTCxDQUFZWixLQUFaLEVBQW1CUyxPQUFuQixFQUE0QixHQUFHRSxJQUEvQjtBQUhmLE9BQVA7QUFLRCxLQW5Cb0I7O0FBQUEsU0FxQnJCQyxNQXJCcUIsR0FxQlosQ0FBQ0MsS0FBRCxFQUFRSixPQUFSLEVBQWlCLEdBQUdFLElBQXBCLEtBQTZCO0FBQ3BDLFdBQUtHLEtBQUwsQ0FBVyxLQUFLQyxNQUFMLENBQVlkLE9BQU9ZLEtBQVAsS0FBaUJmLEdBQTdCLEVBQWtDVyxPQUFsQyxJQUE2QyxHQUE3QyxHQUFtRCxrQkFBTyxHQUFHRSxJQUFWLENBQTlEOztBQUVBSyxjQUFRSCxLQUFSLEVBQWUsR0FBR0YsSUFBbEI7QUFDRCxLQXpCb0I7O0FBQUEsU0EyQnJCVCxHQTNCcUIsR0EyQmYsQ0FBQyxHQUFHUyxJQUFKLEtBQWE7QUFDakIsV0FBS0MsTUFBTCxDQUFZZCxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLEdBQUdhLElBQTFCO0FBQ0QsS0E3Qm9COztBQUFBLFNBK0JyQlIsSUEvQnFCLEdBK0JkLENBQUMsR0FBR1EsSUFBSixLQUFhO0FBQ2xCLFdBQUtDLE1BQUwsQ0FBWWIsSUFBWixFQUFrQixJQUFsQixFQUF3QixHQUFHWSxJQUEzQjtBQUNELEtBakNvQjs7QUFBQSxTQW1DckJSLElBbkNxQixHQW1DZCxDQUFDLEdBQUdRLElBQUosS0FBYTtBQUNsQixXQUFLQyxNQUFMLENBQVlaLEtBQVosRUFBbUIsSUFBbkIsRUFBeUIsR0FBR1csSUFBNUI7QUFDRCxLQXJDb0I7O0FBQ25CLFNBQUtNLEtBQUwsR0FBYVYsT0FBYjtBQUNBLFNBQUtXLFlBQUwsR0FBb0IsZUFBS0MsSUFBTCxDQUFVLEtBQUtGLEtBQWYsRUFBc0IsYUFBdEIsQ0FBcEI7QUFDRDs7QUFFREgsUUFBTU0sT0FBTixFQUFlO0FBQ2IsUUFBSUEsV0FBVyxJQUFmLEVBQXFCO0FBQ25CLG1CQUFHQyxjQUFILENBQWtCLEtBQUtILFlBQXZCLEVBQXFDRSxRQUFRRSxRQUFSLEtBQXFCLElBQTFEO0FBQ0Q7QUFDRjs7QUE4QkRQLFNBQU9GLEtBQVAsRUFBY0osT0FBZCxFQUF1QjtBQUNyQixXQUFRLElBQUcsSUFBSWMsSUFBSixHQUFXQyxXQUFYLEVBQXlCLE1BQUtYLEtBQU0sR0FBeEMsSUFBOENKLFVBQVcsS0FBSUEsT0FBUSxHQUF2QixHQUE0QixFQUExRSxDQUFQO0FBQ0Q7QUExQ3lCO2tCQUFQSixNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBMT0cgPSAnbG9nJztcbmNvbnN0IFdBUk4gPSAnd2FybmluZyc7XG5jb25zdCBFUlJPUiA9ICdlcnJvcic7XG5cbmNvbnN0IExFVkVMUyA9IHtcbiAgbG9nOiBMT0csXG4gIHdhcm46IFdBUk4sXG4gIGVycm9yOiBFUlJPUlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgY29uc3RydWN0b3IobG9nUGF0aCkge1xuICAgIHRoaXMuX3BhdGggPSBsb2dQYXRoO1xuICAgIHRoaXMuX2xvZ0ZpbGVQYXRoID0gcGF0aC5qb2luKHRoaXMuX3BhdGgsICdmdWxjcnVtLmxvZycpO1xuICB9XG5cbiAgd3JpdGUoY29udGVudCkge1xuICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgIGZzLmFwcGVuZEZpbGVTeW5jKHRoaXMuX2xvZ0ZpbGVQYXRoLCBjb250ZW50LnRvU3RyaW5nKCkgKyAnXFxuJyk7XG4gICAgfVxuICB9XG5cbiAgd2l0aENvbnRleHQgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IHRoaXM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9nOiAoLi4uYXJncykgPT4gdGhpcy5vdXRwdXQoTE9HLCBjb250ZXh0LCAuLi5hcmdzKSxcbiAgICAgIHdhcm46ICguLi5hcmdzKSA9PiB0aGlzLm91dHB1dChXQVJOLCBjb250ZXh0LCAuLi5hcmdzKSxcbiAgICAgIGVycm9yOiAoLi4uYXJncykgPT4gdGhpcy5vdXRwdXQoRVJST1IsIGNvbnRleHQsIC4uLmFyZ3MpLFxuICAgIH07XG4gIH1cblxuICBvdXRwdXQgPSAobGV2ZWwsIGNvbnRleHQsIC4uLmFyZ3MpID0+IHtcbiAgICB0aGlzLndyaXRlKHRoaXMucHJlZml4KExFVkVMU1tsZXZlbF0gfHwgTE9HLCBjb250ZXh0KSArICcgJyArIGZvcm1hdCguLi5hcmdzKSk7XG5cbiAgICBjb25zb2xlW2xldmVsXSguLi5hcmdzKTtcbiAgfVxuXG4gIGxvZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgdGhpcy5vdXRwdXQoTE9HLCBudWxsLCAuLi5hcmdzKTtcbiAgfVxuXG4gIHdhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIHRoaXMub3V0cHV0KFdBUk4sIG51bGwsIC4uLmFyZ3MpO1xuICB9XG5cbiAgd2FybiA9ICguLi5hcmdzKSA9PiB7XG4gICAgdGhpcy5vdXRwdXQoRVJST1IsIG51bGwsIC4uLmFyZ3MpO1xuICB9XG5cbiAgcHJlZml4KGxldmVsLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGBbJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9XSBbJHtsZXZlbH1dYCArIChjb250ZXh0ID8gYCBbJHtjb250ZXh0fV1gIDogJycpO1xuICB9XG59XG4iXX0=