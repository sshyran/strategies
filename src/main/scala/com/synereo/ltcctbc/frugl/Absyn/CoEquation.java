package com.synereo.ltcctbc.frugl.Absyn; // Java Package generated by the BNF Converter.

public abstract class CoEquation implements java.io.Serializable {
  public abstract <R,A> R accept(CoEquation.Visitor<R,A> v, A arg);
  public interface Visitor <R,A> {
    public R visit(com.synereo.ltcctbc.frugl.Absyn.CutExpression p, A arg);

  }

}
