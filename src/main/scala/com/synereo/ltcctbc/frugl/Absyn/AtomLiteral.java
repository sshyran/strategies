package com.synereo.ltcctbc.frugl.Absyn; // Java Package generated by the BNF Converter.

public class AtomLiteral extends Nominal {
  public final String lident_;

  public AtomLiteral(String p1) { lident_ = p1; }

  public <R,A> R accept(com.synereo.ltcctbc.frugl.Absyn.Nominal.Visitor<R,A> v, A arg) { return v.visit(this, arg); }

  public boolean equals(Object o) {
    if (this == o) return true;
    if (o instanceof com.synereo.ltcctbc.frugl.Absyn.AtomLiteral) {
      com.synereo.ltcctbc.frugl.Absyn.AtomLiteral x = (com.synereo.ltcctbc.frugl.Absyn.AtomLiteral)o;
      return this.lident_.equals(x.lident_);
    }
    return false;
  }

  public int hashCode() {
    return this.lident_.hashCode();
  }


}