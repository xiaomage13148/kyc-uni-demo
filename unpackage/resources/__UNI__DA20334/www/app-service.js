var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/face_demo.wxml','./pages/index/index.wxml','./pages/index/ocr_demo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/index/ocr_demo","pages/index/face_demo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"wb-kyc-demo","compilerVersion":"2.4.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/face_demo.json']={"usingComponents":{}};
__wxAppCode__['pages/index/face_demo.wxml']=$gwx('./pages/index/face_demo.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"uni-app","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/ocr_demo.json']={"usingComponents":{}};
__wxAppCode__['pages/index/ocr_demo.wxml']=$gwx('./pages/index/ocr_demo.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0fa9":function(n,e,t){"use strict";t.r(e);var o=t("d701");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("2df1");var c,r,a=t("2877"),f=Object(a["a"])(o["default"],c,r,!1,null,null,null);e["default"]=f.exports},"17e7":function(n,e,t){},"1cb8":function(n,e,t){"use strict";(function(n){t("f157"),t("921b");var e=u(t("66fd")),o=u(t("0fa9"));function u(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app";var a=new e.default(c({},o.default));n(a).$mount()}).call(this,t("6e42")["createApp"])},"2df1":function(n,e,t){"use strict";var o=t("17e7"),u=t.n(o);u.a},c572:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},d701:function(n,e,t){"use strict";t.r(e);var o=t("c572"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=u.a}},[["1cb8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2248:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.randomString=void 0;var r=function(t){for(var e="",n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r=0;r<t;r++){var o=Math.round(Math.random()*(n.length-1));e+=n[o]}return e};e.randomString=r},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function p(t){return"[object RegExp]"===c.call(t)}function l(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function d(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var y=_("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,k=$(function(t){return t.replace(S,"-$1").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var D=Function.prototype.bind?x:j;function E(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function I(t,e,n){}var C=function(t,e,n){return!1},N=function(t){return t};function R(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(c){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:I,parsePlatformTagName:N,mustUseProp:C,async:!0,_lifecycleHooks:V},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function L(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+F.source+".$_\\d]");function J(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,G="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===W&&(W=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},it=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=I,ft=0,pt=function(){this.id=ft++,this.subs=[]};function lt(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function ht(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){g(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},dt={child:{configurable:!0}};dt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,dt);var _t=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function yt(t){return new vt(void 0,void 0,void 0,String(t))}function gt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),$t=["push","pop","shift","unshift","splice","sort","reverse"];$t.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var wt=Object.getOwnPropertyNames(bt),Ot=!0;function At(t){Ot=t}var St=function(t){this.value=t,this.dep=new pt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?jt(t,bt,wt):kt(t,bt):jt(t,bt,wt),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function jt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function xt(t,e){var n;if(u(t)&&!(t instanceof vt))return b(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:Ot&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,r,o){var i=new pt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return pt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Tt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&xt(e),i.notify())}})}}function Et(t,e,n){if(Array.isArray(t)&&l(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Dt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&l(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Tt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tt(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var It=q.optionMergeStrategies;function Ct(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Ct(r,o):Et(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Ct(r,o):o}:e?t?function(){return Ct("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Mt(n):n}function Mt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var o=Object.create(t||null);return e?P(o,e):o}It.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},V.forEach(function(t){It[t]=Rt}),U.forEach(function(t){It[t+"s"]=Bt}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in P(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return P(o,t),e&&P(o,e),o},It.provide=Nt;var Ut=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?P({from:i},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Lt(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),qt(e,n),Ft(e),!e._base&&(e.extends&&(t=Lt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Lt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=It[r]||Ut;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Kt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===k(t)){var u=Kt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Jt(r,o,t);var c=Ot;At(!0),xt(a),At(c)}return a}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Wt(t)===Wt(e)}function Kt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Gt(e[n],t))return n;return-1}function Xt(t,e,n){lt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Zt(eo,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Xt(eo,r,o)}return i}function Zt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Qt(eo,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Xt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){pe(t,ce),ce.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var le=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Yt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,o,a,s){var u,c,f,p;for(u in t)c=t[u],f=e[u],p=le(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(p.once)&&(c=t[u]=a(p.name,c,p.capture)),n(p.name,c,p.capture,p.passive,p.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(p=le(u),o(p.name,e[u],p.capture))}function de(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=k(c);_e(a,u,c,f,!0)||_e(a,s,c,f,!1)}return a}}function _e(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(f[u]=yt(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(c)?f[u]=yt(c.text+a):""!==a&&f.push(yt(a)):me(a)&&me(c)?f[u]=yt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function $e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Oe(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),At(!0))}function Oe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Se)&&delete n[c];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=je(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=xe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function De(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function Ee(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=P(P({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Pe(t){return Ht(this.$options,"filters",t,!0)||N}function Te(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=q.keyCodes[e]||n;return o&&r&&!q.keyCodes[e]?Te(o,r):i?Te(i,t):r?k(r)!==e:void 0}function Ce(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=T(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=k(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Me(r,"__static__"+t,!1),r)}function Re(t,e,n){return Me(t,"__once__"+e+(n?"_"+n:""),!0),t}function Me(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Be(t[r],e+"_"+r,n);else Be(t,e,n)}function Be(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ue(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ve(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ve(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Le(t){t._o=Re,t._n=d,t._s=v,t._l=De,t._t=Ee,t._q=R,t._i=M,t._m=Ne,t._f=Pe,t._k=Ie,t._b=Ce,t._v=yt,t._e=_t,t._u=Ve,t._g=Ue,t._d=qe,t._p=Fe}function He(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),p=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Oe(c.inject,o),this.slots=function(){return u.$slots||ke(t.scopedSlots,u.$slots=Ae(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,p);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,p)}}function ze(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=zt(f,c,e||n);else o(r.attrs)&&We(u,r.attrs),o(r.props)&&We(u,r.props);var p=new He(r,u,a,i,t),l=s.render.call(null,p._c,p);if(l instanceof vt)return Je(l,r,p.parent,s,p);if(Array.isArray(l)){for(var h=ge(l)||[],v=new Array(h.length),d=0;d<h.length;d++)v[d]=Je(h[d],r,p.parent,s,p);return v}}function Je(t,e,n,r,o){var i=gt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function We(t,e){for(var n in e)t[O(n)]=e[n]}Le(He.prototype);var Ge={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ge.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,On);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ln(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?En(e,!0):e.$destroy())}},Ke=Object.keys(Ge);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,c),void 0===t))return hn(f,e,n,a,s);e=e||{},lr(t),o(e.model)&&tn(t.options,e);var p=de(e,t,s);if(i(t.options.functional))return ze(t,p,e,n,a);var l=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var v=t.options.name||s,d=new vt("vue-component-"+t.cid+(v?"-"+v:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:a},f);return d}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],o=e[r],i=Ge[r];o===i||o&&o._merged||(e[r]=o?Qe(i,o):i)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return _t();if(o(n)&&o(n.is)&&(e=n.is),!e)return _t();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=ge(r):i===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),a=q.isReservedTag(e)?new vt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):_t()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ae(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Dt(t,"$attrs",i&&i.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function pn(t){Le(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Xt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=_t()),t.parent=o,t}}function ln(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=_t();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var p=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},l=B(function(n){t.resolved=ln(n,e),s?a.length=0:p(!0)}),v=B(function(e){o(t.errorComp)&&(t.error=!0,p(!0))}),d=t(l,v);return u(d)&&(h(d)?r(t.resolved)&&d.then(l,v):h(d.component)&&(d.component.then(l,v),o(d.error)&&(t.errorComp=ln(d.error,e)),o(d.loading)&&(t.loadingComp=ln(d.loading,e),0===d.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,p(!1))},d.delay||200)),o(d.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&v(null)},d.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function dn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||dn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$n(t,e)}function gn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function $n(t,e,n){cn=t,ve(e,n||{},gn,mn,bn,t),cn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?E(n):n;for(var r=E(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Yt(n[i],e,r,e,o)}return e}}var On=null;function An(t){var e=On;return On=t,function(){On=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=An(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var f=t._props,p=t.$options._propKeys||[],l=0;l<p.length;l++){var h=p[l],v=t.$options.props;f[h]=zt(h,v,e,t)}At(!0),t.$options.propsData=e}r=r||n;var d=t.$options._parentListeners;t.$options._parentListeners=r,$n(t,r,d),c&&(t.$slots=Ae(i,o.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"activated")}}function En(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){lt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Yt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Tn=[],In=[],Cn={},Nn=!1,Rn=!1,Mn=0;function Bn(){Mn=Tn.length=In.length=0,Cn={},Nn=Rn=!1}var Un=Date.now;if(K&&!Q){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return Vn.now()})}function qn(){var t,e;for(Un(),Rn=!0,Tn.sort(function(t,e){return t.id-e.id}),Mn=0;Mn<Tn.length;Mn++)t=Tn[Mn],t.before&&t.before(),e=t.id,Cn[e]=null,t.run();var n=In.slice(),r=Tn.slice();Bn(),Hn(n),Fn(r),it&&q.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Pn(r,"updated")}}function Ln(t){t._inactive=!1,In.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function zn(t){var e=t.id;if(null==Cn[e]){if(Cn[e]=!0,Rn){var n=Tn.length-1;while(n>Mn&&Tn[n].id>t.id)n--;Tn.splice(n+1,0,t)}else Tn.push(t);Nn||(Nn=!0,ue(qn))}}var Jn=0,Wn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;lt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Xt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Xt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Gn={enumerable:!0,configurable:!0,get:I,set:I};function Kn(t,e,n){Gn.get=function(){return this[e][n]},Gn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Gn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&ir(t,e.methods),e.data?Zn(t):xt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||At(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Dt(r,i,a),i in t||Kn(t,"_props",i)};for(var s in e)a(s);At(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||L(i)||Kn(t,"_data",i)}xt(e,!0)}function Qn(t,e){lt();try{return t.call(e,e)}catch(eo){return Xt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Wn(t,a||I,I,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Gn.get=r?rr(e):or(n),Gn.set=I):(Gn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):I,Gn.set=n.set||I),Object.defineProperty(t,e,Gn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:D(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Et,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Lt(lr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),yn(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Xn(e),"mp-toutiao"!==e.mpHost&&$e(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function lr(t){var e=t.options;if(t.super){var n=lr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&P(t.extendOptions,o),e=t.options=Lt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function dr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=E(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=Lt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Lt(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,U.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){U.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function $r(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Or(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=$r(a.componentOptions);s&&!e(s)&&Ar(n,i,r,o)}}}function Ar(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}fr(vr),ur(vr),wn(vr),kn(vr),pn(vr);var Sr=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Or(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){Or(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=$r(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!wr(i,r))||a&&r&&wr(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Ar(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:kr};function xr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:P,mergeOptions:Lt,defineReactive:Dt},t.set=Et,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return xt(t),t},t.options=Object.create(null),U.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,jr),dr(t),_r(t),yr(t),br(t)}xr(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:He}),vr.version="2.6.10";var Dr="[object Array]",Er="[object Object]";function Pr(t,e){var n={};return Tr(t,e),Ir(t,e,"",n),n}function Tr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Er&&r==Er){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Tr(i,e[o])}}else n==Dr&&r==Dr&&t.length>=e.length&&e.forEach(function(e,n){Tr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Nr(t),i=Nr(e);if(o==Er)if(i!=Er||Object.keys(t).length<Object.keys(e).length)Cr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Nr(i),u=Nr(a);if(s!=Dr&&s!=Er)i!=e[o]&&Cr(r,(""==n?"":n+".")+o,i);else if(s==Dr)u!=Dr?Cr(r,(""==n?"":n+".")+o,i):i.length<a.length?Cr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Er)if(u!=Er||Object.keys(i).length<Object.keys(a).length)Cr(r,(""==n?"":n+".")+o,i);else for(var c in i)Ir(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Dr?i!=Dr?Cr(r,n,t):t.length<e.length?Cr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Cr(r,n,t)}}function Cr(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function Rr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Mr(t){return Tn.find(function(e){return t._watcher===e})}function Br(t,e){if(!t.__next_tick_pending&&!Mr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Xt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Ur(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Vr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Ur(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Pr(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Rr(n)})):Rr(this)}};function qr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=qr),t.$options.render||(t.$options.render=qr),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Lr(t,e){return o(t)||o(e)?Hr(t,zr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Jr(t):u(t)?Wr(t):"string"===typeof t?t:""}function Jr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Gr=$(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?T(t):"string"===typeof t?Gr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:E(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Br(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=$e,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;lt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Yt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return Lr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}vr.prototype.__patch__=Vr,vr.prototype.$mount=function(t,e){return Fr(this,t,e)},to(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=ve,e.createComponent=Ae,e.createPage=Oe,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||l(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var v=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function y(t){return"string"===typeof t}function g(t){return"[object Object]"===v.call(t)}function m(t,e){return d.call(t,e)}function b(){}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],S={},k={};function j(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function E(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&_(e[n])&&(t[n]=j(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&_(e[n])&&D(t[n],e[n])})}function T(t,e){"string"===typeof t&&g(e)?E(k[t]||(k[t]={}),e):g(t)&&E(S,t)}function I(t,e){"string"===typeof t?g(e)?P(k[t],e):delete k[t]:g(t)&&P(S,t)}function C(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(C(o));else{var i=o(e);if(N(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function B(t,e){var n=[];Array.isArray(S.returnValue)&&n.push.apply(n,f(S.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function U(t){var e=Object.create(null);Object.keys(S).forEach(function(t){"returnValue"!==t&&(e[t]=S[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function V(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=U(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[M(a,t)].concat(o))})}return e.apply(void 0,[M(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var q={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,L=/^create|Manager$/,H=/^on/;function z(t){return L.test(t)}function J(t){return F.test(t)}function W(t){return H.test(t)&&"onPush"!==t}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(z(t)||J(t)||W(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return _(n.success)||_(n.fail)||_(n.complete)?B(t,V.apply(void 0,[t,e,n].concat(o))):B(t,G(new Promise(function(r,i){V.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var ot={promiseInterceptor:q},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:T,removeInterceptor:I}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(lt(t,r,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var i=!0===o?e:{};for(var a in _(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];_(s)&&(s=s(e[a],e,i)),s?y(s)?i[s]=e[a]:g(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return _(e)&&(e=ft(t,e,r)),e}function lt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(at.returnValue)&&(e=at.returnValue(t,e)),pt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;_(n)&&(o=n(e)),e=pt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return J(t)?lt(t,a,o.returnValue,z(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var vt=Object.create(null),dt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(o),_(r)&&r(o)}}dt.forEach(function(t){vt[t]=_t(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(yt(),"$off",Array.prototype.slice.call(arguments))}function $t(){return gt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return gt(yt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:mt,$off:bt,$once:$t,$emit:wt});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function St(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&St(e),e}var jt=Object.freeze({getSubNVueById:kt,requireNativePlugin:At}),xt=Page,Dt=Component,Et=/:/g,Pt=$(function(t){return O(t.replace(Et,"-"))});function Tt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Pt(n)].concat(o))}}}function It(t,e){var n=e[t];e[t]=n?function(){Tt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Tt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Dt(t)};var Ct=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Mt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Bt(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Ut(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Lt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Jt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Jt(t.props,!0)}))}),a}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Lt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var o=r["default"];_(o)&&(o=o()),r.type=zt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:o,observer:Lt(e)}}else{var i=zt(e,r);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:Lt(e)}}}),n}function Wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Gt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Wt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Qt;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Yt(e.$vm,t,n[1],n[2],s,r));var a=o[r];if(!_(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Nt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};i.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){i[t]=a[t]}),Mt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function pe(t){return re(t,{mocks:oe,initRefs:ce})}var le=["onUniNViewMessage"];function he(t){var e=pe(t);return Mt(e,le),e}function ve(t){return App(he(t)),t}function de(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Bt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={multipleSlots:!0,addGlobalClass:!0},p={options:f,data:qt(c,r.default.prototype),behaviors:Ht(c,ae),properties:Jt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Ut(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,u]}function _e(t){return de(t,{isPage:se,initRelation:ue})}function ye(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return Mt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}ge.push.apply(ge,Ct);var $e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=be(t);return Mt(e.methods,$e),e}function Oe(t){return Component(we(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Se={};Object.keys(it).forEach(function(t){Se[t]=it[t]}),Object.keys(Ot).forEach(function(t){Se[t]=Ot[t]}),Object.keys(jt).forEach(function(t){Se[t]=X(t,jt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Se[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Se,t.UniEmitter=Ot),wx.createApp=ve,wx.createPage=Oe,wx.createComponent=Ae;var ke=Se,je=ke;e.default=je}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},9035:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"uni-app"},"pages/index/ocr_demo":{},"pages/index/face_demo":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var p=e.version,l="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",v=1800,d=300,_=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},$=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},S=function(){return"n"===O()?plus.runtime.version:""},k=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",D="Last__Visit__Time",E=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=w(),t.setStorageSync(x,n),t.removeStorageSync(D)),n},P=function(){var e=t.getStorageSync(D),n=0;return n=e||"",t.setStorageSync(D,w()),n},T="__page__residence__time",I=0,C=0,N=function(){return I=w(),"n"===O()&&t.setStorageSync(T,w()),I},R=function(){return C=w(),"n"===O()&&(I=t.getStorageSync(T)),C-I},M="Total__Visit__Count",B=function(){var e=t.getStorageSync(M),n=1;return e&&(n=e,n++),t.setStorageSync(M,n),n},U=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},V=0,q=0,F=function(){var t=(new Date).getTime();return V=t,q=0,t},L=function(){var t=(new Date).getTime();return q=t,t},H=function(t){var e=0;if(0!==V&&(e=q-V),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>d;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>v;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},J=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("9035").default,X=n("9c17").default||n("9c17"),Y=t.getSystemInfoSync(),Z=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:A(),ak:X.appid,usv:p,v:S(),ch:k(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){L();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,L();var n=H();F();var r=J(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=J(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);L(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){L();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=j(t.scene),this.statData.fvts=E(),this.statData.lvts=P(),this.statData.tvc=B(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=w(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(R()<_)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var u=[],c=[],f=[],l=function(t){var e=s[t];e.forEach(function(e){var n=$(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)l(h);u.push.apply(u,c.concat(f));var v={usv:p,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){r._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:l,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(U(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"9c17":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__DA20334"};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f157:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"43f5":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"444b":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"6a81":function(n,t,e){"use strict";(function(n){e("f157"),e("921b");u(e("66fd"));var t=u(e("b95d"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},b95d:function(n,t,e){"use strict";e.r(t);var u=e("444b"),r=e("cf56");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var f=e("2877"),c=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},cf56:function(n,t,e){"use strict";e.r(t);var u=e("43f5"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a}},[["6a81","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/index/ocr_demo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/ocr_demo.js';

define('pages/index/ocr_demo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/ocr_demo"],{"1acb":function(A,Q,I){"use strict";(function(A,C){Object.defineProperty(Q,"__esModule",{value:!0}),Q.default=void 0;var e=I("2248"),E=A.requireNativePlugin("DC-WBOCRService"),g=A.requireNativePlugin("DC-WBFaceService"),t={data:function(){return{title:"点击下方图片，体验身份证识别",front_recognize_result:"",back_recognize_result:"",frontPlaceholdImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0gAAAHgCAYAAAHoMH3nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzAyNkVDODczM0FBMTFFNzlBMUNDNDQxRkIwOTg5MzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzAyNkVDODgzM0FBMTFFNzlBMUNDNDQxRkIwOTg5MzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMDI2RUM4NTMzQUExMUU3OUExQ0M0NDFGQjA5ODkzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMDI2RUM4NjMzQUExMUU3OUExQ0M0NDFGQjA5ODkzNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiCrEvoAAE0jSURBVHja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",backPlaceholdImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0gAAAHgCAYAAAHoMH3nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEE5MDlBNTAzM0FBMTFFNzlBMUNDNDQxRkIwOTg5MzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEE5MDlBNTEzM0FBMTFFNzlBMUNDNDQxRkIwOTg5MzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QTkwOUE0RTMzQUExMUU3OUExQ0M0NDFGQjA5ODkzNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTkwOUE0RjMzQUExMUU3OUExQ0M0NDFGQjA5ODkzNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtAEvMsAAEhTSURBVHja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",frontImg:"",backImg:""}},onLoad:function(){this.frontImg=this.frontPlaceholdImg,this.backImg=this.backPlaceholdImg},updated:function(){console.log(C("update===========>"," at pages/index/ocr_demo.vue:46")),console.log(C("update===========>"," at pages/index/ocr_demo.vue:47")),console.log(C("update===========>"," at pages/index/ocr_demo.vue:48")),console.log(C("update===========>"," at pages/index/ocr_demo.vue:49")),console.log(C("update===========>"," at pages/index/ocr_demo.vue:50"))},methods:{ocrEntrance:function(Q){var I=this,g="TIDA0001",t=(0,e.randomString)(8),n=(0,e.randomString)(9),d=(0,e.randomString)(32);A.request({method:"GET",url:"https://ida.webank.com/ems-partner/cert/signature",data:{appid:g,nonce:d,userid:t},success:function(A){console.log(C(A.data," at pages/index/ocr_demo.vue:69")),E.startOCR({version:"1.0.0",appId:g,nonce:d,userId:t,sign:A.data.sign,orderNo:n,config:{SDKType:Q}},function(A){console.log(C("【uni log】startOCR callback ================> result."," at pages/index/ocr_demo.vue:82")),console.log(C(A," at pages/index/ocr_demo.vue:83")),1==Q?(I.frontImg=A.res.frontFullImg,A.res.frontFullImg="[front img base64 string.]",I.front_recognize_result=Object.keys(A.res).map(function(Q){return[Q,A["res"][Q]]})):(I.backImg=A.res.backFullImg,A.res.backFullImg="[back img base64 string.]",I.back_recognize_result=Object.keys(A.res).map(function(Q){return[Q,A["res"][Q]]}))})}})},frontEntrance:function(){this.ocrEntrance(1)},backEntrance:function(){this.ocrEntrance(2)},faceEntrance:function(){g.loginInLiveCheckAndCompareWithIdImageService({userid:"test_user_1",nonce:"xxxxxx",sign:"xxxxxx",appid:"xxxxxx",orderNo:"xxxxxx",apiVersion:"1.0.0",licence:"NwKivlx4CuaA0r1Ri/x7VGugcN5bfIUm9Q0ZfUHmr2R6mjwuZUGRUNL+ydQhfRjaCl4s+YdUnVPxGGBfxCeSYpHk0AZIRUHUy5TETKUlSKrolSR+svPde8ZImxQhXIK5Tyr+zweHGZpPzOsuYglLuPeECYNGtDfw+4pTEIXFkwBbUMuoAt/RcLBxGpjB8Ol5meMP/8A10YfWJwPvuhVttMxXX7fIqPVxrC7bMRG8Y0AXUJQtJmFR8u35BvCY1YZYrQ3puOHTVvAdOJH53+w+kKVt1sMzVaa/1qnjgNHtC8DkHJ6+FJx5nOn2Etah7oWKE4dQrd+HOjXQeWFRdb9/ww==",faceType:2,faceId:"xxxx",sdkConfig:{windowLevel:1,showSuccessPage:!0,showFailurePage:!1,recordVideo:!0,theme:1}},function(A){console.log(C("【uni log】face SDK callback ================> result."," at pages/index/ocr_demo.vue:126")),console.log(C(A," at pages/index/ocr_demo.vue:127"))})}}};Q.default=t}).call(this,I("6e42")["default"],I("0de9")["default"])},"1eeb":function(A,Q,I){"use strict";(function(A){I("f157"),I("921b");C(I("66fd"));var Q=C(I("cb67"));function C(A){return A&&A.__esModule?A:{default:A}}A(Q.default)}).call(this,I("6e42")["createPage"])},"7c8a":function(A,Q,I){},cb52:function(A,Q,I){"use strict";var C=I("7c8a"),e=I.n(C);e.a},cb67:function(A,Q,I){"use strict";I.r(Q);var C=I("ffea"),e=I("ebaf");for(var E in e)"default"!==E&&function(A){I.d(Q,A,function(){return e[A]})}(E);I("cb52");var g=I("2877"),t=Object(g["a"])(e["default"],C["a"],C["b"],!1,null,null,null);Q["default"]=t.exports},ebaf:function(A,Q,I){"use strict";I.r(Q);var C=I("1acb"),e=I.n(C);for(var E in C)"default"!==E&&function(A){I.d(Q,A,function(){return C[A]})}(E);Q["default"]=e.a},ffea:function(A,Q,I){"use strict";var C=function(){var A=this,Q=A.$createElement;A._self._c},e=[];I.d(Q,"a",function(){return C}),I.d(Q,"b",function(){return e})}},[["1eeb","common/runtime","common/vendor"]]]);
});
require('pages/index/ocr_demo.js');
__wxRoute = 'pages/index/face_demo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/face_demo.js';

define('pages/index/face_demo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/face_demo"],{"442c":function(e,t,n){"use strict";n.r(t);var u=n("be3c"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a},"7ffe":function(e,t,n){"use strict";n.r(t);var u=n("d492"),r=n("442c");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var c=n("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},"8d93":function(e,t,n){"use strict";(function(e){n("f157"),n("921b");u(n("66fd"));var t=u(n("7ffe"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},be3c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},d492:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})}},[["8d93","common/runtime","common/vendor"]]]);
});
require('pages/index/face_demo.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

